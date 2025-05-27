import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Product from "../models/product.js";
import uploadImage from "../services/cloudinaryService.js";

dotenv.config().parsed;



const handleSignup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.status(409).json({ error: "User already exists" });
        }
        const newUser = new User({ name, email, password });
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);
        await newUser.save();
        const token = jwt.sign({ userId: newUser._id, name: name, email: email }, process.env.JWT_SECRET, { expiresIn: '14d' });
        return res.status(200).json({ token });
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal server error" });
    }
}

const handleLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "User doesn't exist." });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        const token = jwt.sign({ userId: user._id, name: user.name, email: user.email }, process.env.JWT_SECRET, { expiresIn: '14d' });
        return res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

const handleDelete = async (req, res) => {
    const { userId } = req.body;

    try {
        // Find the user first
        const user = await User.findOne({ _id: userId });
        if (!user) {
            return res.status(400).json({ error: "User doesn't exist." });
        }

        // Delete all posts of the user
        await Product.deleteMany({ seller: userId });

        // Delete the user
        await User.findOneAndDelete({ _id: userId });

        return res.status(200).json({ message: "User and all related posts deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
};

const handleGetUser = async (req, res) => {
    const { seller } = req.body;
    console.log(seller);
    const user = await User.findOne({ _id: seller }, { name: 1, _id: 0 });
    return res.status(200).json(user);
}

const handleUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findOne({ _id: userId }, { password: 0 });
        console.log(user)
        if (!user) {
            console.log("hii");
            return res.status(400).json({ error: "User doesn't exist." });
        }
        const products = await Product.find({ seller: userId }).sort({ createdAt: -1 }).populate('seller', '_id name');
        if (products.length === 0) {
            return res.status(200).json({ message: "No products found.", user });
        }
        return res.status(200).json({ message: "User and Products", user, products });
    }
    catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
}
const handleUserChange = async (req, res) => {
    const { userId } = req.params; // Assuming userId comes from route params
    const { name, email } = req.body;
    let imageUrl;

    // Handle image upload to Cloudinary if a file is provided
    if (req.file) {
        try {
            imageUrl = await uploadImage(req.file);
        } catch (error) {
            return res.status(500).json({ message: "Error uploading image to Cloudinary", error: error.message });
        }
    }

    try {
        // Find the user
        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({ error: "User doesn't exist." });
        }

        // Update user data
        if (name) user.name = name;
        if (email) {
            // Check if the new email is already in use by another user
            const emailExists = await User.findOne({ email, _id: { $ne: userId } });
            if (emailExists) {
                return res.status(409).json({ error: "Email already in use" });
            }
            user.email = email;
        }
        if (imageUrl) {
            user.image = imageUrl; // Update the profilePicture field with the Cloudinary URL
        }
        console.log(user)
        // Save the updated user
        await user.save();

        // Exclude password from response
        const updatedUser = await User.findById(userId, { password: 0 });

        return res.status(200).json({
            message: "Profile updated successfully",
            user: updatedUser,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
};

export { handleSignup, handleLogin, handleDelete, handleGetUser, handleUser, handleUserChange };