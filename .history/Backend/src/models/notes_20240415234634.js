import mongoose from 'mongoose';
const NoteSchema = new mongoose.Schema({
    _id: false,
    title: {type: String,     
        },
    content: String,
    timestamps: true
});
export default mongoose.model('notes', NoteSchema);
