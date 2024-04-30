const collection =require('../models/collection');
module.exports ={

    async NewCollection(req, res){
        const data = new collection(req.data);
        try {
            const dataCollection = await data.save();
            console.log(dataCollection.toString());

            res.redirect('/User/note');
        } catch (error) {
            res.send("Don't saved data ")
        }
    },

    async GetCollection(){
        const data = await collection.find({});
        try {
            res.json(data);
        } catch (error) {
            res.send(" Data not found ")

        }
    }
}