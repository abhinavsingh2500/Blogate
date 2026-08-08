import fs from "fs";
import { imagekit } from "../configs/imageKit.js";
import Blog from "../models/Blog.js";
import Comment from "../models/Comments.js";


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
        const blogs = await Blog.find({ isPublished: true }).sort({ createdAt: -1 });
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

export const getBlogById = async (req, res) => {
    try {
        const { blogId } = req.params;
        const blog = await Blog.findById(blogId);
        if (!blog || !blog.isPublished) {
            return res.json({
                success: false,
                message: "Blog not published or not found"
            });
        }
        res.json({
            success: true,
            blog
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};


export const deleteBlogById = async (req, res) => {
    try {
        const id = req.body.id || req.params.id || req.body.blogId;
        const blog = await Blog.findByIdAndDelete(id);

        // Delete all comments associated with this blog
        await Comment.deleteMany({ blog: id });

        res.json({
            success: true,
            message: "Blog deleted successfully"
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};

export const togglePublish = async (req, res) => {
    try {
        const id = req.body.id || req.params.id || req.body.blogId;
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.json({
                success: false,
                message: "Blog not found"
            });
        }
        blog.isPublished = !blog.isPublished;
        await blog.save();
        res.json({
            success: true,
            message: `Blog ${blog.isPublished ? 'published' : 'unpublished'} successfully`
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};


export const addComment=async(req,res)=>{
    try {
        const{blog,name,content}=req.body;
        const comment=await Comment.create({
            blog,
            name,
            content
        });
        res.json({success:true, message:'comment added for review'})
    }
    catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
}

export const getBlogComments = async (req, res) => {
    try {
        const { blogId } = req.body;
        const comments = await Comment.find({ blog: blogId, isApproved: true }).sort({ createdAt: -1 });
        res.json({ success: true, comments });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};




