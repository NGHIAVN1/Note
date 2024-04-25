const dataUser = require('../models/users');
module.exports ={
     async signupUser(req, res) {
        const data= new  dataUser(req.body)
        try {
            await data.save();
            res.redirect('/Users/login')
        } catch (error) {
            console.log(error)
        }
    },

     async getLogin  (req, res){
        const data = await dataUser.find({
         });
        console.log(data.toString());
        res.json(data);    
    }
    // async postLogin (req, res){
    //     const data = 
    // }
}

