import jwt from "jsonwebtoken";
import Blog from "../models/Blog.js";
import Comment from "../models/Comments.js";
import User from "../models/User.js";

export const adminRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.json({ success: false, message: "Please fill all fields" });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: "User already exists with this email" });
        }
        const user = await User.create({ name, email, password });
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET || 'secret');
        return res.json({ success: true, token, message: "Account created successfully" });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};

export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Check env credentials first
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign({ email }, process.env.JWT_SECRET || 'secret');
            return res.json({ success: true, token });
        }
        // Check registered users in DB
        const user = await User.findOne({ email });
        if (user && user.password === password) {
            const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET || 'secret');
            return res.json({ success: true, token });
        }
        return res.json({ success: false, message: "Invalid credentials" });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};


export const getAllBlogsAdmin=async(req,res)=>{
    try {
        const blogs=await Blog.find({}).sort({createdAt:-1});
        res.json({success:true,blogs})
    }
    catch(error){
        res.json({success:false,message:error.message})
    }
}

export const getAllComments=async(req,res)=>{
    try {
        const comments=await Comment.find({}).populate('blog').sort({createdAt:-1});
        res.json({success:true,comments})
    }
    catch(error){
        res.json({success:false,message:error.message})
    }
}

export const getDashboard=async(req,res)=>{
    try {
        const recentBlogs=await Blog.find({}).sort({createdAt:-1}).limit(5);
        const Comments=await Comment.countDocuments()
        const blogs=await Blog.countDocuments()
        const drafts=await Blog.countDocuments({isPublished:false})

        const dashboardData = { blogs, comments: Comments, drafts, recentBlogs }
        res.json({ success: true, dashboardData })

    
    }
    catch(error){
        res.json({success:false,message:error.message})
    }
}

export const deleteCommentsById=async(req,res)=>{
    try {
        const {id}=req.body;
        const comment=await Comment.findByIdAndDelete(id);
        res.json({success:true,message:"Comment deleted successfully"});
    }
    catch(error){
        res.json({success:false,message:error.message});
    }
}

export const approveComment = async (req, res) => {
    try {
        const { id } = req.body;
        const comment = await Comment.findById(id);
        if (!comment) {
            return res.json({ success: false, message: "Comment not found" });
        }
        comment.isApproved = !comment.isApproved;
        await comment.save();
        res.json({
            success: true,
            message: `Comment ${comment.isApproved ? 'approved' : 'unapproved'} successfully`
        });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};