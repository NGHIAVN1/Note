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
const getLogin = (req, res)=>{
    // const data = await dataUser.find({
    //  });
    // console.log(data.toString());
    res.json();    
}
module.exports = getLogin;
module.exports = signupUser;