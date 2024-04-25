import mongoose from 'mongoose';
const NoteSchema = new mongoose.Schema({
    id: {type: number},
    title: String,
    content: String,
    timestamps: true
});
const dbNotes = mongoose.Schema('notes', NoteSchema);
export default dbNotes;