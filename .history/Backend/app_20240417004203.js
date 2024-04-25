require('dotenv').config();
// import users from './src/models/users';
const useUser = require('./src/models/users');
var cors = require('cors');
const connect = require('./database')
const auth = require('./src/routes/routes');
 const express = require('express');
 const app = express();
 const bodyParser = require('body-parser');
const routes = require('./src/routes/routes');
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(cors());
connect;

app.use(routes)
const port = process.env.PORT;
app.listen(port,
(port)=>console.log(port)
)