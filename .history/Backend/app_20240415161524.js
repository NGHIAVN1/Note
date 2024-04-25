require('dotenv').config();
 import { mongoose } from 'mongoose';
import users from './src/models/users';
 const express = require('express');
const app = express();
app.get("/user",async (req, res)=>{
   const userDb = await users.find({});
   res.render("User", (err, res)=>{
    if(err){
        console.log("Hello World")
    }
   })
})
const port = process.env.PORT;
app.listen(port,
(port)=>console.log(port)
)