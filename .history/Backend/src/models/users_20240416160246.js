const mongoose = require('mongoose');
const {Schema} =mongoose ;
export const UserSchema = new Schema(
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