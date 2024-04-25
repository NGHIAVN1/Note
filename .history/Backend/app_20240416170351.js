require('dotenv').config();
// import users from './src/models/users';
const useUser = require('./src/models/users');
var cors = require('cors');
const connect = require('./database')
const auth = require('./src/routes/routes');
 const express = require('express');
 const app = express();
 const bodyParser = require('body-parser');
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(cors());
// app.get("/user",async (req, res)=>{
//    const userDb = await users.find({});
//    res.render("User", (err, res)=>{
//     if(err){
//         console.log("Hello World")
//     }
//    })
// })
const mongoose= require('mongoose');
ConnectDb().catch(
    (err) =>{
        console.log(err);
    }
)
async function ConnectDb(){
    await mongoose.connect("mongodb://127.0.0.1:27017/notebook");
    console.log("connect success");
};


// app.use(auth);

connect;
const port = process.env.PORT;
app.listen(port,
(port)=>console.log(port)
)