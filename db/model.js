const mongoose = require('mongoose');
const { Schema } = mongoose;
// getting-started.js

mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true });

// schema for user/photos
const pictureSchema = Schema({
  id: Number,
  user_name: String,
  photo_title: String,
  date_added: Date,
  url_address: String,
  comment: String,
});

// this processes photo within schema
const photo = mongoose.model('Photo', pictureSchema);

// const save = (photos, callback) => {
//   photo.insertMany(photos, (err) => {
//     if (err) {
//       return console.log(err);
//     }
//     return callback('saved to database!');
//   });
// };
// don't need this function yet

// console.log(save(data, () => {}));
module.exports = photo;
