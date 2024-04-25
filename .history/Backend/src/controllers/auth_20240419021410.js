const dataUser = require('../models/users');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

function generateAccessToken(username){
    return jwt.sign(username, process.env.TOKEN_SECRET, {expiresIn: '1800s'})
}

module.exports ={
    async signupUser(req, res) {
        const data= new  dataUser(req.body);
        const token = generateAccessToken(req.body.username)
        try {
            await data.save();
            res.json(token);
            // res.redirect('/Users/login');
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
                            res.redirect('/');
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
    // async postLogin (req, res){
    //     const data = 
    // }


