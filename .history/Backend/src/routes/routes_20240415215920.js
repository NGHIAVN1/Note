const express = require("express");
export const routes= express.Router();
routes.get("/", (req, res)=>{
    res.end("Hello");

})
