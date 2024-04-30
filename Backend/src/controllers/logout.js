exports =
{
     function (req, res) {
        res.clearCookie('jwt');
        res.send('Cookie cleared');
    }
}