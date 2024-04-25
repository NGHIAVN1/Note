import User from "../models/users.js"
const express = require("express");
 const routes = express.Router();
routes.get("/", (req, res)=>{
    res.send('<p>Hello</p>');

})
routes.post('/signup', async (req, res)=>{
    const dataUser = new User(req.body);
    try {
        const k = await dataUser.save();
        res.json(k);
    } catch (error) {
        res.status(500).send("Error exist in the main");
    }
})
module.exports =routes;