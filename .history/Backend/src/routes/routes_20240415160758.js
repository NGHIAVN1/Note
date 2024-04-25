const express = require("express");
const routes= express.Router();
routes.get("/", (req, res)=>{
    res.end("Hello");

})
export default routes