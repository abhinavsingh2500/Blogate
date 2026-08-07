export const addBlog=async(req,res)=>{
    try{
       const{title,subTitle,description,category,image,isPublished} = 
       JSON.parse 
       (req.body.blog);
       const imageFile=req.file; 
       if(!title||!subTitle||!description||!category||!imageFile) return res.status(400).json({message:"Please fill all the fields"})
    
    }
    catch(error){

    }
}