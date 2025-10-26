const Blog = require("../models/blog.model");

// get all fetching data 

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAT: -1 });
    console.log(blogs);
    res.status(200).send({ message: "blog fetching successful", blogs });
  } catch (error) {
    console.error("error fetching  all bogs", error);
    res.status(404).send({ message: "error creating a new blog", error });
  }
}


const getBlogById = async(req,res)=>{
    try {
        const {id} = req.params

        const blog  = await Blog.findById(id)
        res.status(200).send({message:"Blog is fetched successfully", blog}) 
        
        if(!blog){
            return res.status(404).send({message:"no blog found"})
        }
    } catch (error) {
        console.error("error fetching  all bogs", error);
        res.status(404).send({ message: "error creating a new blog", error });
    }
}



// post all data 

const postANewBlog =  async (req, res) => {
  try {

       const newBlog = new Blog({
        ...req.body
       })

       const blog = await newBlog.save()
        res.status(200).send({message:"Blog is delete successfully", blog}) 
        
        if(!blog){
            return res.status(404).send({message:"no blog found"})
        }

   
  } catch (error) {
    console.error(error);
    res.status(404).send({ message: "error creating a new blog", error });
  }
} 



// delete a blog


const deletABlog = async (req, res) => {
  try {
        const {id} = req.params
        const deleteBlog  = await Blog.findByIdAndDelete(id)

      if(!deleteBlog){
            return res.status(404).send({message:"no blog found"})
        }
        res.status(200).send({message:"Blog is delete successfully", blog:deleteBlog}) 
    } catch (error) {
   console.error(error);
    res.status(404).send({ message: "error creating a new blog", error });
  }
}


const putABlog =  async (req, res) => {
  try {
        const {id} = req.params
        const updatedBlog  = await Blog.findByIdAndUpdate(id, req.body, {new:true})
      if(!updatedBlog){
            return res.status(404).send({message:"no blog found"})
        }
        res.status(200).send({message:"Blog is updated successfully", blog:updatedBlog}) 
        


  } catch (error) {
   console.error(error);
    res.status(404).send({ message: "error creating a new blog", error });
  }
}

module.exports ={
 getAllBlogs,
 getBlogById,
 postANewBlog,
 deletABlog,
 putABlog
}