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
connect;

app.post('/signup', async (req, res)=>{
    const dataUser = new useUser(req.body);
    try {
        const k = await dataUser.save();
        res.json(k);
    } catch (error) {
        res.status(500).send("Error exist in the main");
    }
})

// app.use(auth);

connect;
const port = process.env.PORT;
app.listen(port,
(port)=>console.log(port)
)