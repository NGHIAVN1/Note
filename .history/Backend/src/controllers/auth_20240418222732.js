const dataUser = require('../models/users');
const signupUser = async (req, res) => {
    const data= new  dataUser(req.body)
    try {
        await data.save();
        res.redirect('/Users/login')
    } catch (error) {
        console.log(error)
    }
};
const getLogin = async(req, res)=>{
    const dataUser = await useUser.find({
    });
    console.log(dataUser.toString());
    res.send(dataUser)    
}
module.exports = getLogin;
module.exports = signupUser;