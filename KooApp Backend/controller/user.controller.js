const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv")
dotenv.config();
async function register(name, email, gender, password){
    let userFlag = await User.findOne({email});
    
    if(userFlag){
      throw  new Error("User already exist");
    }   

    let obj ={
        name , 
        email,
        gender, 
        password
    }

    let user = await User.create(obj);
    let dta = user.toJSON();
    delete dta.password;
    return dta;
}


async function login(email,password){
    let user = await User.findOne({email:email});
    if(!user){
      throw new Error("User does not Exist")
    }
    if(user.password.localeCompare(password)){
        throw new Error( "User password is worng")
    }
    let obj ={
        _id: user._id,
        name : user.name,
        email : user.email,
        gender: user.gender,
    }
    let token = genrateToken(obj);
    let dta = user.toJSON();
    delete dta.password;
     console.log(dta);
    return {
        token,
        user:dta
    }
}

async function  Verify(token){
  let user =  jwt.verify(token,process.env.SCECRET_TOKEN);

  return user;
  
}


function genrateToken(payload){
  let token = jwt.sign(payload,process.env.SCECRET_TOKEN)
  return token;
}


async function getUser(email){
  let user = await User.findOne({email});
  console.log(user);
  let dta = user.toJSON();
  delete dta.password;
  return dta;
}

module.exports={register, login, Verify,getUser};