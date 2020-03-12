const mongoose = require('mongoose');

// getting-started.js

mongoose.connect('mongodb://localhost/photos', { useNewUrlParser: true });

// to be notified if connection is made or errors
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {});

// schema for user/photos
const pictureSchema = mongoose.Schema({
  id: Number,
  user_name: String,
  photo_title: String,
  date_added: Date,
  url_address: String,
  comment: String,
});

// this processes photo within schema
const Photo = mongoose.model('Photo', pictureSchema);

// to save data to database
const save = (photos, callback) => {
  Photo.insertMany(photos, (err) => {
    if (err) {
      return console.log(err);
    }
    return callback('saved to database!');
  });
};

// console.log(save(randomData, () => { console.log('complete!');
//  }));

module.exports.save = save;
