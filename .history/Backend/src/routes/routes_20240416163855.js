const useUser = require('../models/users');
const express = require("express");
 const routes = express.Router();
 routes.post('/signup', async (req, res)=>{
    const dataUser = new useUser(req.body);
    try {
        const k = await dataUser.save();
        res.json(k);
    } catch (error) {
        res.status(404).send("Error exist in the main");
    }
})
routes.get("/", (req, res)=>{
    res.send('<p>Hello</p>');

})

module.exports =routes;