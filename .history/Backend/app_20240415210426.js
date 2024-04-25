require('dotenv').config();
import users from './src/models/users';
import ConnectDb from './src/views/database'
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
ConnectDb();
const port = process.env.PORT;
app.listen(port,
(port)=>console.log(port)
)