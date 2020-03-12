const express = require('express');
const path = require('path');

// TO DO:
// import database
// import bodyparser

const app = express();
const port = 3004;

// to display static file
app.use(express.static(path.join(__dirname, '../public')));
// import middleware for body parser and json

app.get('/', (req, res) => res.send('Hello World!'));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
