const express = require("express");
const useUser = require('../controllers/auth')
 const cors = require('cors');
 const routes = express.Router();

 routes.use(cors());
routes.get('/Users/signup',(req, res)=>{
    res.render('/Users/signup');
})
routes.post('/Users/signup', useUser);

routes.get("/Users/login", async(req, res)=>{
    const dataUser = await useUser.find({
    });
    console.log(dataUser.toString());
    res.send(dataUser)    
})

module.exports =routes;