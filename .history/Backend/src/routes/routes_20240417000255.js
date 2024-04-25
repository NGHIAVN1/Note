const useUser = require('../models/users');
const express = require("express");
 const routes = express.Router();
 const cors = require('cors');

 routes.use(cors());

 routes.post('/user q/signup', async (req, res)=>{
    const dataUser = new useUser(req.body);
    try {
        const k = await dataUser.save();
        console.log(k.toString());
        res.json(k);
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