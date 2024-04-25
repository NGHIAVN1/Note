import { userDb } from "../models/users";
const express = require("express");
 const routes = express.Router();
 routes.post('/signup',userDb)
routes.get("/", (req, res)=>{
    res.send('<p>Hello</p>');

})

module.exports =routes;