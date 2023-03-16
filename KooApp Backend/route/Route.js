const express = require('express');
const { verify } = require('jsonwebtoken');
const {upload,fetchPosts,findParticular,deleteParticular} = require('../controller/post.controller');
const {register, login, Verify,getUser} = require('../controller/user.controller');
const Post = require('../model/post.model');
const api = express.Router();
const translate = require("translate-google")

api.post("/translate", async(req,res)=>{
   try {
    let {input, fromLang, toLang}=req.body;
    let output = await  translate(input, {from: fromLang, to: toLang});
    console.log(output);
    res.send(output);
   } catch (error) {
    console.log(error)
    res.send(error);
   }
})

api.post("/register", async(req,res)=>{
    try {
        let {name, email, gender, password}= req.body;
        let user = await register(name, email, gender, password);
        console.log(user);
        res.send({
            message: "User Registered Successful",
            user,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            error:"User went worng"
        })
    }
})

api.get("/getUser", async (req,res)=>{
    try {
       let {email} = req.body;
       let user = await getUser(email);
       console.log(user);
       res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

api.post("/login", async(req,res)=>{
    try {
        let {email, password}= req.body;
        let user = await login(email,password);
        console.log(user);
        res.send({
            message:"Login successfull",
            user
        })
    } catch (error) {
        // console.log(error);
        res.status(500).send({
            error:error
        })
    }
})


api.post("/verify", async(req,res)=>{
    try {
        let {token}= req.body;
        let user = await Verify(token);
        // console.log(user);
        res.send({
            user
        })
    } catch (error) {
        // console.log(error);
        res.status(500).send({
            error:error
        })
    }
})

api.post("/posts", async(req,res)=>{
    try {
        let { UserId,name,description, image, likes, comments}= req.body;
        // console.log(userId,name,description, image, like, comments )
        let post = await upload(UserId,name,description, image, likes, comments);
        // console.log(post);
        res.send({
            message: "Post Uploaded Successfully",
            post,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            error:"User went worng"
        })
    }
})

api.get("/posts", async(req,res)=>{
    try {
        let posts = await fetchPosts();
        res.send({
            message:"Posts are here",
            posts,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            error:error
        })
    }
})

api.patch("/posts/:id", async (req,res)=>{
    console.log("object")
    try {
        let {id}= req.params;
        let {value}=req.body;
        console.log(id);
        let post = await findParticular(id ,value);
       
        res.send({
            message : "Here is your Post !",
            post : post
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            error
        })
    }
})

api.delete("/posts/delete/:id", async (req,res)=>{
    // console.log("object")
    try {
        let {id}= req.params;
        console.log(id);
        let post = await deleteParticular(id);
       
        res.send({
            message : "Post Deleted !",
            post : post
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            error
        })
    }
})




module.exports=api;
