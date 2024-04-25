const mongoose = require('mongoose');
const {Schema} =mongoose ;
const UserSchema = new Schema(
    {
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
export const userDb = mongoose.model('user', UserSchema);
