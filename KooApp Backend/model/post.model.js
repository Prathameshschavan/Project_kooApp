const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId:{
        type:String
    },

    name:{
        type:String
    },

    description :{
        type:String
    },

    image:{
        type:String
    },

    likes:{
        type: Number
    },

    comments:{
        type:String
    }
})

const Post = mongoose.model("Post", postSchema);

module.exports=Post;