const url ="mongodb://localhost:27017/mydb";
const mongo = require('mongodb').MongoClient;
mongo.connect(url, function(err, db){
    if (err) throw err;
    console.log("create success");
    db.close();
})