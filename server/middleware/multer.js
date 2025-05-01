import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../cloudinaryConfig.js';

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: (req, file) => ({
        folder: 'Uploads',
        format: file.mimetype === 'image/jpeg' ? 'jpg' : 'png', 
        public_id: `${Date.now()}-${file.originalname}`,
    }),
});

const upload = multer({
    storage,
});

export default upload;