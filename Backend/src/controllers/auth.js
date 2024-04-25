const dataUser = require('../models/users');
const dataNote = require('../models/notes')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const bcrypt = require('bcrypt');
const { configDotenv } = require('dotenv');

function generateAccessToken(username){
    return jwt.sign(username, process.env.TOKEN_SECRET, {expiresIn: '18000s'})
}

module.exports ={
    
     authenticateToken(req, res, next) {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        console.log(token);
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


    async signupUser(req, res) {
        const data= new  dataUser(req.body);
        try {
            await data.save();
            console.log(token);
            res.send(token);
        } catch (error) {
                console.log(error),
                res.redirect('/Users/signup');
        }
    },


    async getLogin  (req, res){
        const data = await dataUser.find ({
         });
        console.log(data.toString());
        res.json(data);    
    },


    async authLogin(req, res){
        const {email, password , username} = req.body;
        const data = await dataUser.findOne({email: email});
        const accessToken = await generateAccessToken({username: username});
        console.log(data.toString());
  
        if(email){
            bcrypt.compare(password, data.password, (err, matched)=>{
                if(matched == true){
                    
                    res.json({accessToken, success: true});
                }
                else{
                    res.redirect('/Users/signup');
                }
            })
        }
        else{
            res.send("login fail");
        }
    },
    
    async newNote(req, res){
        const data = new dataNote(req.data);
        try {
            await data.save;
            res.redirect("/")
        } catch (error) {
            res.status(400).send("not found")
        } 
    },

     async getNotes(req, res){
        const data = await dataNote.find({});
        try {
            res.send(data)
        } catch (error) {
            res.status(400).send("Note not found");
        }
    }
 }


