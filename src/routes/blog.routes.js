const express = require("express");
const Blog = require("../models/blog.model");
const { getAllBlogs, getBlogById, postANewBlog, deletABlog, putABlog } = require("../controllers/blog.controllers");

const router = express.Router();

router.get("/",getAllBlogs );




router.get("/:id", getBlogById)

router.post("/add-post",postANewBlog);



router.delete("/:id", deletABlog);




router.put("/:id",putABlog);

module.exports = router;
