require('dotenv').config();
// import { Mongoose } from 'mongoose';
const express = require('express');
const app = express();
app.get("/user",(req, res)=>{
    res.json({
        fullname: "Doan Vo Hieu Nghia"
    })
})
const port = process.env.PORT;
app.listen(port,
(port)=>console.log(port)
)