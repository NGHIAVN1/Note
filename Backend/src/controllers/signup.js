module.exports =
{
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
}}