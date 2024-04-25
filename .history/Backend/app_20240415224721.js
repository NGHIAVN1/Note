require('dotenv').config();
// import users from './src/models/users';
const connect = require('./src/views/database')
const storeUser = require('./src/models/users');
const auth = require('./src/routes/routes');
 const express = require('express');
const app = express();
// app.get("/user",async (req, res)=>{
//    const userDb = await users.find({});
//    res.render("User", (err, res)=>{
//     if(err){
//         console.log("Hello World")
//     }
//    })
// })
app.post('/signup',storeUser);
connect;
app.use(auth);
const port = process.env.PORT;
app.listen(port,
(port)=>console.log(port)
)