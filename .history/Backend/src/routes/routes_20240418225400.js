const express = require("express");
const auth =require('../controllers/auth')
 const cors = require('cors');
 const routes = express.Router();

 routes.use(cors());
routes.get('/Users/signup',(req, res)=>{
    res.render('/Users/signup');
})
routes.post('/Users/signup', useUser);

routes.get("/Users/login", auth.signupUser() );

module.exports =routes;