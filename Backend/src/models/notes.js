const  mongoose = require('mongoose');
const NotesSchema = new mongoose.Schema({
    title: String,
    content: String,
},
    {timestamps: true}
);
module.exports = mongoose.model('notes', NotesSchema);
