import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema(
    {
        id: Number,
        username: String,
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String
        }
    }
)
export default mongoose.Schema('user', User)
