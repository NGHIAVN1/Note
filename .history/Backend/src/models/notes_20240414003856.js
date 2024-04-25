import mongoose from 'mongoose';
const NoteSchema = new mongoose.Schema({
    _id: {type: number},
    title: String,
    content: String,
    timestamps: true
});
export default mongoose.Schema('notes', NoteSchema);
