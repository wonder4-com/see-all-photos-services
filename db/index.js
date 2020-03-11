// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

//to be notified if connection is made or errors
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

//schema for user/photos
let pictureSchema = mongoose.Schema({
  id: Number,
  userName: String,
  userTitle: String,
  userComment: String,
  datePosted: Date,
  photoURL: String
});


// this processes photo within schema
let Photo = mongoose.model('Photo', pictureSchema);



//to save data to database 
let save = (photos, callback) => {

};

module.exports.save = save;