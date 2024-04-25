const useUser = require('../models/users');
const express = require("express");
 const routes = express.Router();
 routes.post('/post', async (req, res)=>{
    const dataUser = new useUser(req.body);
    try {
        const k = await dataUser.save();
        res.json(k);
    } catch (error) {
        res.status(404).send("Error exist in the main");
    }
})
routes.get("/User/signup", async(req, res)=>{
    const dataUser = await useUser.find({
        email: "@"
    });
    console.log(dataUser.toString());
    res.send(dataUser)    
})

module.exports =routes;