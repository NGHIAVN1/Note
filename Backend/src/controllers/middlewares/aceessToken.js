const dataNote = require('../../models/notes')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const { configDotenv } = require('dotenv');



module.exports ={
    
     authenticateToken(req, res, next) {
        const authHeader = req.headers['authorization']
        const bearer_header = authHeader && authHeader.split(' ')[1]
        // console.log(token);
        let cookieToken = req.cookie.accessToken;
        let token = bearer_header || cookieToken;
        if (token == null) return res.sendStatus(401)
        
        jwt.verify(token, process.env.TOKEN_SECRET , (err,user) => {
          console.log(err)
          if (err) return res.sendStatus(403)
          req.user = user;
          console.log("validate sucess");
          res.setHeader("Authorization", `Bearer ${token}`);
          next()      
        })
    },

 }


