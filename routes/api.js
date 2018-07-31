const express = require("express");
const router = express.Router();
const blogSchema=require("../models/blogSchema.js");

router.get("/", function(req, res) {
    res.render("index");
  });
//getting post from database
router.get("/post", function(req, res,next) {
    blogSchema.find({}).then(function(blog){
     res.send(blog);
 });
});

//adding to database
router.post("/post", function(req, res,next) {
    console.log(req.body)
    blogSchema.create(req.body).then(function(blog){
        res.send(blog);
    }).catch(next);  
});

//update a post
router.put("/post/:id", function(req, res,next) {
    blogSchema.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        blogSchema.findOne({_id:req.params.id}).then(function(blog){
            res.send(blog);
        });
    });
    
});

//delete a post
router.delete("/post/:id", function(req, res,next) {
    blogSchema.findByIdAndRemove({_id:req.params.id}).then(function(blog){
        res.send(blog);
    });
});

module.exports=router;