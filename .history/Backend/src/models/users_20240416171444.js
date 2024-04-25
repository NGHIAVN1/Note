const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
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
 const userDb= mongoose.model('user', UserSchema);
 module.exports =userDb;