import express from 'express';
const app = express();
app.get("/",(req, res)=>{
    res.json({
        fullname: "Doan Vo Hieu Nghia"
    })
})
const port = 3000;
app.listen(
(port)=>console.log(port), port
)