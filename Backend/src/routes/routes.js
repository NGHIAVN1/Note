const express = require("express");
const collection = require("../controllers/collection_note")
const userLogin = require("../controllers/login")
const userSignup = require("../controllers/signup")
const user = require("../controllers/logout")
const auth =require('../controllers/middlewares/aceessToken')
 const cors = require('cors');
 const routes = express.Router();

routes.use(cors());
routes.get('/auth', auth.authenticateToken, (req, res)=>{
    res.json({ user, token });

});

routes.get('/Users/signup',(req, res)=>{
    res.send("");
})
// routes.post('/Users/signup', userSignup.signupUser);

routes.get("/Users/login",userLogin.getLogin);
routes.post("/Users/login", userLogin.authLogin);

// routes.post("/Notes/new", auth.newNote);
// routes.get("/Notes/new", auth.getNotes);

// routes.post("/Collection/new",collection.NewCollection);
// routes.get("/Collection/note",auth.authenticateToken, collection.GetCollection)
// ;
routes.post("User/logout", user.Logout);
module.exports =routes;