const express = require('express');
const app = express();
app.get("/",(req, res)=>{
    res.json({
        fullname: "Doan Vo Hieu Nghia"
    })
})
const port = 3000;
app.listen(port,
(port)=>console.log(port)
)