const mongoose= require('mongoose');
ConnectDb().catch(
    (err) =>{
        console.log(err);
    }
)
async function ConnectDb(){
    await mongoose.connect("mongodb://localhost:12707/takenote");
    console.log("connect success");
};
module.exports = ConnectDb();
  