var mongo = require('mongodb');
var url = "mongodb://localhost:27017/notes";
mongo.MongoClient.connect(url, function(err,db){
    if(err) throw err;
    console.log('Database Create');
    db.close();
})