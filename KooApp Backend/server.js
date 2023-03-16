const express = require("express");
const connection = require("./Database/db");
const api = require("./route/Route");
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();


const  app =  express();
app.use(express.json());
app.use(cors());
app.use("/api",api);


app.listen(8080, ()=>{
    connection();
    console.log("Server is running on port 8080");
})