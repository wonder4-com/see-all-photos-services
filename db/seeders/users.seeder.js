const MongooseSeed = require('mongoose-seed-db');
const path = require('path');
// const photo = require('../model.js');
// const dummyData = require('./dummyData.js');
// import MongooseSeed from 'mongoose-seed-db'; //ES6

MongooseSeed.connect('mongodb://localhost:27017/mongoose-seed').then(() => {
  MongooseSeed.loadModels(path.join(__dirname, '../model.js'));
  MongooseSeed.clearAll().then(() => {
    MongooseSeed.populate(path.join(__dirname, './dummyData.js')).then(() => {
      console.log('complete with seeding');
      process.exit();
    })
      .catch(() => {
        console.log('error');
      });
  });
// });
