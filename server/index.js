const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// load models
// const Photo = require('../db/model');

const app = express();
const port = 3004;

const options = { useNewUrlParser: true, useUnifiedTopology: true };
// mongoose instance connection url connection
// mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/wonder4allPhotos', options);

// import middleware for body parser and json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// to display static file
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => res.send('Hello World!'));

// import route from controller via routes
const routes = require('./routes.js');
// register route
routes(app);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
