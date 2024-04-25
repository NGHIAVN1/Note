const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
    {
        username: String,
        email: {
            type: String,
            index : {
                unique : true,
                dropDups : true}
        },
        password: {
            type: String
        }
    }
)
module.exports= mongoose.model('user', UserSchema);
