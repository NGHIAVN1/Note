import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema(
    {
        id: String,
        name: String,
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
const dbUser = mongoose.Schema('user', User) 
export default dbUser;