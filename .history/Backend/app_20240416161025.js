import { configDotenv } from 'dotenv';// import users from './src/models/users';
import { routes } from './src/routes/routes.js';
const connect = require('./src/views/database')
const auth = require('./src/routes/routes');
 const express = require('express');
 const app = express();
 const bodyParser = require('body-parser');
 configDotenv.apply();
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/user",async (req, res)=>{
//    const userDb = await users.find({});
//    res.render("User", (err, res)=>{
//     if(err){
//         console.log("Hello World")
//     }
//    })
// })

 app.use(routes);

connect;
const port = process.env.PORT;
app.listen(port,
(port)=>console.log(port)
)