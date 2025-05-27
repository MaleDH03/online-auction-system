import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import paintingManPortrait from "../assets/painting-man-s-portrait.jpg"

const VITE_API = `${import.meta.env.VITE_API}`;

const CreateAuction = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    itemPrice: "",
    itemDescription: "",
    itemCategory: "",
    itemPhoto: null,
    itemStartDate: "",
    itemEndDate: "",
  });

  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // For error feedback
  const [successMessage, setSuccessMessage] = useState(""); // For success feedback
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate(); // Initialize useNavigate

  // Validate form
  useEffect(() => {
    const isValid =
      formData.itemName &&
      formData.itemPrice &&
      formData.itemDescription &&
      formData.itemCategory &&
      formData.itemPhoto &&
      formData.itemStartDate &&
      formData.itemEndDate;
    setIsValid(isValid);
  }, [formData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const formDataForUpload = new FormData();
      formDataForUpload.append("itemName", formData.itemName);
      formDataForUpload.append("itemPrice", formData.itemPrice);
      formDataForUpload.append("itemDescription", formData.itemDescription);
      formDataForUpload.append("itemCategory", formData.itemCategory);
      formDataForUpload.append("itemPhoto", formData.itemPhoto);
      formDataForUpload.append("itemStartDate", formData.itemStartDate);
      formDataForUpload.append("itemEndDate", formData.itemEndDate);
      formDataForUpload.append("seller", user.userId);

      const response = await axios.post(
        `${VITE_API}/api/auction/create`,
        formDataForUpload,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      // Set success message
      setSuccessMessage("Auction created successfully! 👍 ");
      
      // Reset form
      setFormData({
        itemName: "",
        itemPrice: "",
        itemDescription: "",
        itemCategory: "",
        itemPhoto: null,
        itemStartDate: "",
        itemEndDate: "",
      });

      // Redirect to /myauctions after a short delay to show success message
      setTimeout(() => {
        navigate(`/auction/user/${user.userId}`);
      }, 3000); 
    } catch (error) {
      // Handle errors
      const errorMsg =
        error.response?.data?.error ||
        error.message ||
        "Failed to create auction. Please try again.";
      setErrorMessage(errorMsg);
      console.error("Error creating auction:", JSON.stringify(error.response?.data || error, null, 2));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Optional: Validate file type client-side
      if (!["image/png", "image/jpeg"].includes(file.type)) {
        setErrorMessage("Only PNG and JPEG files are allowed!");
        return;
      }
      setFormData({ ...formData, itemPhoto: file });
    }
  };

  const today = new Date().toISOString().split("T")[0];
  const minEndDate = formData.itemStartDate || today;

  return (
    <div
      className="min-h-[calc(100svh-9rem)] px-4 py-4 bg-[#2A1B3D] bg-cover bg-center"
      style={{
        backgroundImage: `url(${paintingManPortrait})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
      }}
      
    >
     <div className="absolute inset-0 bg-black opacity-70"></div>
     
      
      <div className="mx-auto w-full max-w-[550px] bg-[#3A2F5F]/90 rounded-lg p-6 shadow-lg backdrop-blur-sm">
        {/* Display success or error messages */}
        {successMessage && (
          <div className="mb-4 p-3 bg-[#1E90FF]/20 text-white rounded">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="mb-4 p-3 bg-[#FF69B4]/20 text-white rounded">
            {errorMessage}
          </div>
        )}
  
        <form onSubmit={handleSubmit}>
          <div className="-mx-3 flex flex-wrap">
            {/* Item Name */}
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="itemName"
                  className="mb-3 block text-base font-medium text-white"
                >
                  Item Name
                </label>
                <input
                  value={formData.itemName}
                  onChange={(e) =>
                    setFormData({ ...formData, itemName: e.target.value })
                  }
                  type="text"
                  name="itemName"
                  id="itemName"
                  placeholder="Item Name"
                  className="w-full rounded-md border border-[#1E90FF] bg-[#1E1E2F] py-3 px-6 text-base font-medium text-white outline-none focus:border-[#FF69B4] focus:ring-2 focus:ring-[#FF69B4] placeholder-gray-400"
                />
              </div>
            </div>
            {/* Item Price */}
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="price"
                  className="mb-3 block text-base font-medium text-white"
                >
                  Item Starting Price
                </label>
                <input
                  value={formData.itemPrice}
                  onChange={(e) =>
                    setFormData({ ...formData, itemPrice: e.target.value })
                  }
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Enter the starting price"
                  className="w-full rounded-md border border-[#1E90FF] bg-[#1E1E2F] py-3 px-6 text-base font-medium text-white outline-none focus:border-[#FF69B4] focus:ring-2 focus:ring-[#FF69B4] placeholder-gray-400"
                />
              </div>
            </div>
          </div>
          {/* Item Description */}
          <div className="mb-5">
            <label
              htmlFor="description"
              className="mb-3 block text-base font-medium text-white"
            >
              Item Description
            </label>
            <textarea
              value={formData.itemDescription}
              onChange={(e) =>
                setFormData({ ...formData, itemDescription: e.target.value })
              }
              rows="4"
              name="description"
              id="description"
              placeholder="Enter your description here"
              className="w-full rounded-md border border-[#1E90FF] bg-[#1E1E2F] py-3 px-6 text-base font-medium text-white outline-none focus:border-[#FF69B4] focus:ring-2 focus:ring-[#FF69B4] placeholder-gray-400"
            />
          </div>
          {/* Item Category */}
          <div className="mb-5">
            <label
              className="mb-3 block text-base font-medium text-white"
              htmlFor="category"
            >
              Item Category
            </label>
            <select
              className="w-full rounded-md border border-[#1E90FF] bg-[#1E1E2F] py-3 px-6 text-base font-medium text-white outline-none focus:border-[#FF69B4] focus:ring-2 focus:ring-[#FF69B4]"
              id="category"
              name="category"
              value={formData.itemCategory}
              onChange={(e) =>
                setFormData({ ...formData, itemCategory: e.target.value })
              }
            >
              <option value="" className="bg-[#1E1E2F] text-white">
                Select a category
              </option>
              <option value="2d" className="bg-[#1E1E2F] text-white">
                2D Digital Art
              </option>
              <option value="3d" className="bg-[#1E1E2F] text-white">
                3D Art & Modeling
              </option>
              <option value="Generative" className="bg-[#1E1E2F] text-white">
                Generative & Algorithmic Art
              </option>
              <option value="anim" className="bg-[#1E1E2F] text-white">
                Motion Design & Animation
              </option>
              <option value="IN" className="bg-[#1E1E2F] text-white">
                Interactive & Immersive Art
              </option>
              <option value="photo" className="bg-[#1E1E2F] text-white">
                Photo Manipulation & Mixed Media
              </option>
              <option value="nft" className="bg-[#1E1E2F] text-white">
                NFT & Blockchain Art
              </option>
              <option value="glitch" className="bg-[#1E1E2F] text-white">
                Experimental & Glitch Art
              </option>
            </select>
          </div>
          {/* Item Image */}
          <div className="mb-5">
            <label className="mb-3 block text-base font-medium text-white">
              Upload item image
            </label>
            <div className="mb-5">
              <input
                type="file"
                name="itemPhoto"
                id="itemPhoto"
                className="sr-only"
                onChange={handleFileChange}
                accept="image/png,image/jpeg"
              />
              {formData.itemPhoto && (
                <div className="mb-4">
                  <span className="font-medium text-white">
                    Selected file: {formData.itemPhoto.name}
                  </span>
                </div>
              )}
              <label
                htmlFor="itemPhoto"
                className="relative flex min-h-[100px] items-center justify-center rounded-md border border-dashed border-[#1E90FF] bg-[#1E1E2F] text-center"
              >
                <div>
                  <span className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-[#1E90FF]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <span className="font-medium text-white">
                      Drop image to Attach, or
                      <span className="text-[#FF69B4] underline ml-[4px]">
                        browse
                      </span>
                    </span>
                  </span>
                </div>
              </label>
            </div>
          </div>
          {/* Item start & end date */}
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="startDate"
                  className="mb-3 block text-base font-medium text-white"
                >
                  Starting Date
                </label>
                <input
                  value={formData.itemStartDate}
                  onChange={(e) =>
                    setFormData({ ...formData, itemStartDate: e.target.value })
                  }
                  type="date"
                  name="startDate"
                  id="startDate"
                  min={today}
                  className="w-full rounded-md border border-[#1E90FF] bg-[#1E1E2F] py-3 px-6 text-base font-medium text-white outline-none focus:border-[#FF69B4] focus:ring-2 focus:ring-[#FF69B4]"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="endDate"
                  className="mb-3 block text-base font-medium text-white"
                >
                  Ending Date
                </label>
                <input
                  value={formData.itemEndDate}
                  onChange={(e) =>
                    setFormData({ ...formData, itemEndDate: e.target.value })
                  }
                  type="date"
                  name="endDate"
                  id="endDate"
                  disabled={!formData.itemStartDate}
                  min={minEndDate}
                  className="w-full rounded-md border border-[#1E90FF] bg-[#1E1E2F] py-3 px-6 text-base font-medium text-white outline-none focus:border-[#FF69B4] focus:ring-2 focus:ring-[#FF69B4]"
                />
              </div>
            </div>
          </div>
          {/* Submit button */}
          <div className="flex justify-end">
            <button
              className={`rounded-md py-3 px-8 text-center text-base font-semibold text-white outline-none bg-gradient-to-r from-[#1E90FF] to-[#FF69B4] hover:from-[#FF69B4] hover:to-[#1E90FF] transition-all disabled:bg-[#1E1E2F] disabled:cursor-not-allowed`}
              type="submit"
              disabled={!isValid}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAuction;