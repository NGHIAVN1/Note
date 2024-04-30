const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const dataUser = require('../models/users');
const cookie = require('cookie-parser');

function generateAccessToken(username){
    return jwt.sign(username, process.env.TOKEN_SECRET, {expiresIn: '18000s'})
}
module.exports ={
    
    async getLogin  (req, res){
    const data = await dataUser.find ({

     });
     try {
        console.log(data.toString());
    res.json(data);    
     } catch (error) {
        res.status(404).send("")
     }
    
},


async authLogin(req, res){
    const {email, password} = req.body;
    const data = await dataUser.findOne({email: email});
    const accessToken = await generateAccessToken({email: email });
    console.log(data);

    if(email){
        bcrypt.compare(password, data.password, (err, same)=>{
            if(same == true){
                 res.cookie('jwt', accessToken, {
                    httpOnly: true,
                    maxAge: 3600000,
                    secure:true
                }).status(200).json({accessToken, success: true});


                // res.redirect('/');
            }
            else{
                res.redirect('/Users/login');
            }
        })
    }
    else{
        res.send("login fail");
    }
}
}