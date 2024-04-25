const mongoose = require('mongoose');
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
const db= mongoose.Schema('user', UserSchema)
module.exports =db;