const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
    {   
        email: String,   
        username: String,
        password: {
            type: String
        }
    }
)
module.exports= mongoose.model('user', UserSchema);
