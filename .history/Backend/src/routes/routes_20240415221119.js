const express = require("express");
 const routes = express.Router();
routes.get("/", (req, res)=>{
    res.send('<p>Hello</p>');

})
module.exports =routes