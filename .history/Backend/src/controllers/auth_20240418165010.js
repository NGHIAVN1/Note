const dataUser = require('../models/users');
module.exports = (async (req, res) => {
    const dataUser= new  dataUser(req.body)
    try {
        await dataUser.save();
        res.redirect('/Users/login')
    } catch (error) {
        console.log(error)
    }
}) ();