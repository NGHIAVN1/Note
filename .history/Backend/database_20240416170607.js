const mongoose= require('mongoose');
ConnectDb().catch(
    (err) =>{
        console.log(err);
    }
)
async function ConnectDb(){
    await  mongoose.connect("mongodb://127.0.0.1:27017/notebook");
    console.log("connect success");
};
module.exports = ConnectDb();
  