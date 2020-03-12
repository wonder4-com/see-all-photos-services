const seeder = require('mongoose-seed');
// Data array containing seed data - documents organized by Model
const data = require('./seedFile.js');
// Connect to MongoDB via Mongoose
const db = 'mongodb://localhost:3200/photos';

seeder.connect(db, () => {
// Load Mongoose models
  seeder.loadModels([
    './model.js',
  ]);
  // Clear specified collections
  seeder.clearModels(['Photo'], () => {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, (err, done) => {
      if (err) {
        return console.log('seed err', err);
      }
      if (done) {
        return console.log('seed done', done);
      }
      return seeder.disconnect();
    });
  });
});
