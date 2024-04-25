const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

    const UserSchema = new mongoose.Schema({
        email: String,
        username: String,
        password: String
      });

UserSchema.pre('save', function(next){
  const user = this;
  const myplaintext = 10;
  bcrypt.hash(user.password,myplaintext , (error, hash)=>{
    user.password = hash;
    next();
  })
})

module.exports= mongoose.model('user', UserSchema);
