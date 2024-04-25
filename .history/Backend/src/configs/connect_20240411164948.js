import mongoose from 'mongoose';
ConnectDb().catch(
    (err) =>{
        console.log(err);
    }
)
async function ConnectDb(){
    await mongoose.connect("mongodb://localhost:12707/note");
    console.log("connect success");
};
