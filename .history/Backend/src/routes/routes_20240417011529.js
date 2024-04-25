const useUser = require('../models/users');
const express = require("express");
 const cors = require('cors');
 const routes = express.Router();

 routes.use(cors());

 routes.post('/user/signup', async (req, res)=>{
    const dataUser = new useUser(req.body);
    try {
        const k = await dataUser.save();
        console.log(k.toString());
       res.redirect('/user/login');
        res.send("connect success");
    } catch (error) {
        res.status(404).send("Error exist in the main");
    }
})

routes.get("/User/login", async(req, res)=>{
    const dataUser = await useUser.find({
    });
    console.log(dataUser.toString());
    res.send(dataUser)    
})

module.exports =routes;