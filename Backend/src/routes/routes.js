const express = require("express");

const auth =require('../controllers/auth')
 const cors = require('cors');
 const routes = express.Router();

routes.use(cors());
routes.get('/auth', auth.authenticateToken, (req, res)=>{
    res.json({ user, token });

});

routes.get('/Users/signup',(req, res)=>{
    res.json();
})
routes.post('/Users/signup', auth.signupUser);

routes.get("/Users/login",auth.getLogin);
routes.post("/Users/login", auth.authLogin);

routes.post("/Notes/new", auth.newNote);
routes.get("/Notes/new", auth.getNotes);
module.exports =routes;