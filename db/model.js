const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:3200/photos', { useNewUrlParser: true });

// schema for user/photos
const pictureSchema = new mongoose.Schema({
  file: {
    user_name: String,
    photo_title: String,
    date_added: Date,
    url_address: String,
    comment: String,
  },
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
