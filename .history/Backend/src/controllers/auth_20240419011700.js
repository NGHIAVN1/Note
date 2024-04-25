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
    async authLogin(req, res){
        const {email, password} = req.body;
        const data = await dataUser.findOne({email: email});
        console.log(typeof(data));
        if(data == object){
                if (email == undefined) {
                     await bcrypt.compare(password, dataUser.password,(err, matched)=>{
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
            
        }
        }
        
    }
    // async postLogin (req, res){
    //     const data = 
    // }


