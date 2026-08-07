import fs from "fs";
import { imagekit } from "../configs/imageKit.js";
import Blog from "../models/Blog.js";

export const addBlog = async (req, res) => {
    try {
        let blogData = {};
        if (req.body.blog) {
            if (typeof req.body.blog === 'string') {
                try {
                    blogData = JSON.parse(req.body.blog);
                } catch (e) {
                    blogData = {};
                }
            } else if (typeof req.body.blog === 'object') {
                blogData = req.body.blog;
            }
        }

        const title = blogData.title || req.body.title;
        const subTitle = blogData.subTitle || req.body.subTitle;
        const description = blogData.description || req.body.description;
        const category = blogData.category || req.body.category;
        const isPublished = blogData.isPublished !== undefined ? blogData.isPublished : req.body.isPublished;
        const imageFile = req.file;


        if (!title || !subTitle || !description || !category || !imageFile) {
            return res.status(400).json({ success: false, message: "Please fill all the fields" });
        }

        // Read image file buffer
        const fileBuffer = fs.readFileSync(imageFile.path);

        // Upload image to ImageKit
        const uploadResult = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/blogs"
        });

        // Optimize image URL
        const optimizedImageUrl = imagekit.url({
            path: uploadResult.filePath,
            transformation: [
                {
                    height: 500,
                    width: 1280,
                    quality: "auto",
                    format: "webp",
                    crop: "fill"
                }
            ]
        });

        // Delete temporary file from local storage
        fs.unlink(imageFile.path, () => { });

        // Save blog to MongoDB
        await Blog.create({
            title,
            subTitle,
            description,
            category,
            image: optimizedImageUrl,
            isPublished: isPublished === 'true' || isPublished === true
        });

        res.json({
            success: true,
            message: 'Blog added successfully'
        });

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ isPublished: true });
        res.json({
            success: true,
            blogs
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};


