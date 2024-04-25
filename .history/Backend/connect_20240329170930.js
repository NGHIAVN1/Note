require('mongodb').MongoClient.connect("mongodb://localhost:27017/mydb",function(err,db){
   if(err)
     throw err;
   console.log("connected successfully");
   db.close();
});