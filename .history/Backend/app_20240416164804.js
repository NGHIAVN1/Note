require('dotenv').config();
// import users from './src/models/users';
const useUser = require('./src/models/users');
var cors = require('cors');
const connect = require('./src/views/database')
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
app.get('/signup', async (req, res)=>{
    res.json();
    }
})


connect;
const port = process.env.PORT;
app.listen(port,
(port)=>console.log(port)
)