const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{ 
        type:String
    },
    email:{
        type:String
    },
    gender:{
        type:String
    },
    password:{
        type:String 
    },
})

let User =  mongoose.model("User",userSchema);

module.exports=User;