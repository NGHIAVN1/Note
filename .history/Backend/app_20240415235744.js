require('dotenv').config();
// import users from './src/models/users';
const connect = require('./src/views/database')
const auth = require('./src/routes/routes');
 const express = require('express');
 const app = express();
 const bodyParser = require('body-parser');
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
routes.post('/signup', async (req, res)=>{
    const dataUser = new useUser(req.body);
    try {
        const k = await dataUser.save();
        res.json(k);
    } catch (error) {
        res.status(500).send("Error exist in the main");
    }
})
routes.get("/", (req, res)=>{
    res.send('<p>Hello</p>');

})

connect;
app.use(auth);

const port = process.env.PORT;
app.listen(port,
(port)=>console.log(port)
)