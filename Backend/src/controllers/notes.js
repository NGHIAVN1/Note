
modules.export={
        async newNote(req, res){
        const data = new dataNote(req.data);
        try {
            await data.save;
            res.redirect("/")
        } catch (error) {
            res.status(400).send("not found")
        } 
    },

 async getNotes(req, res){
    const data = await dataNote.find({});
    try {
        res.send(data)
    } catch (error) {
        res.status(400).send("Note not found");
    }
}
}