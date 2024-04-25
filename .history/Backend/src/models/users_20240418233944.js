const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

    const UserSchema = new mongoose.Schema({
        email: String,
        username: String,
        password: String
      });
UserSchema.pre('save', (next)=>{
  const user = this;
  bcrypt.hash(user.password, 10, (error, hash)=>{
    user.password = hash;
    next();
  })
})
module.exports= mongoose.model('user', UserSchema);
