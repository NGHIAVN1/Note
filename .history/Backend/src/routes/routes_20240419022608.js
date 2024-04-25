const express = require("express");

const auth =require('../controllers/auth')
 const cors = require('cors');
 const routes = express.Router();

 routes.use(cors());
 app.get('/api/userOrders', authenticateToken, (req, res) => {
    res.json();
  })
routes.get('/Users/signup',(req, res)=>{
    res.json();
})
routes.post('/Users/signup', auth.signupUser);

routes.post("/Users/login", auth.authLogin);

module.exports =routes;