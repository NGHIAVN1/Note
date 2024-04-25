require('dotenv').config();
const bcrypt = require('bcrypt');

// import users from './src/models/users';
const useUser = require('./src/models/users');
var cors = require('cors');
const connect = require('./database')
const auth = require('./src/routes/routes');
 const express = require('express');
 const app = express();
 const bodyParser = require('body-parser');
const routes = require('./src/routes/routes');
const { authenticateToken } = require('./src/controllers/auth');
app.set('view engine', 'html');
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(cors());
connect;
app.use('/api/auth', auth.authenticateToken);
app.use((req, res) => {
    res.status(404).json({
      message: 'Route Not Found',
    });
  });
const port = process.env.PORT;
app.listen(port,
(port)=>console.log(port)
)