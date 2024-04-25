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
module.exports= mongoose.model('user', UserSchema);
