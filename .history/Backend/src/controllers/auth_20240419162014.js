const dataUser = require('../models/users');
const jwt = require('jsonwebtoken')
require('dotenv').config();
const bcrypt = require('bcrypt');
const { configDotenv } = require('dotenv');

function generateAccessToken(username){
    return jwt.sign(username, process.env.TOKEN_SECRET, {expiresIn: '1800s'})
}

module.exports ={
     authenticateToken(req, res, next) {
        const authHeader = req.headers['Authorization']
        const token = authHeader && authHeader.split(' ')[1]
      
        if (token == null) return res.sendStatus(401)
      
        jwt.verify(token, process.env.TOKEN_SECRET , (err,user) => {
          console.log(err)
      
          if (err) return res.sendStatus(403)
      
          req.user = user
      
          next()
        })
      },
    async signupUser(req, res) {
        const data= new  dataUser(req.body);
        const token = generateAccessToken({username: req.body.username})
        try {
            await data.save();
            console.log(token);
            res.json(token);
            res.redirect('/Users/login');
        } catch (error) {
                console.log(error),
                res.redirect('/Users/signup');
        }
    },

    async getLogin  (req, res){
        const data = await dataUser.find({
         });
        console.log(data.toString());
        res.json(data);    
    },

    async authLogin(req, res){
        const {email, password} = req.body;
        const data = await dataUser.findOne({email: email});
        console.log(typeof(data));
        if(data){
                if (email) {
                     await bcrypt.compare(password, data.password,(err, matched)=>{
                        if(matched){
                            res.redirect('/api/userOrders');
                        }
                        else{
                            res.redirect("/Users/signup")
                        }
                     })
                     console.log("matched");

                } else {
                    res.redirect("/Users/signup")
                }
            
        }
        }
        
    }


