const dataUser = require('../models/users');
const bcrypt = require('bcrypt');
module.exports ={
     async signupUser(req, res) {
        const data= new  dataUser(req.body)
        try {
            await data.save();
            res.redirect('/Users/login')
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
    async autheLogin(req, res){
        const {email, password} = req.body;
        dataUser.findOne({email: email},(err, user)=>{
            if (email) {
                 bcrypt.compare(password, dataUser.password,(err, matched)=>{
                    if(matched){
                        res.redirect('/')
                    }
                    else{
                        console.log(err);
                        res.redirect("/Users/signup")
                    }
                 })
            } else {
                res.redirect("/Users/signup")
            }
        })
        }
        
    }
    // async postLogin (req, res){
    //     const data = 
    // }


