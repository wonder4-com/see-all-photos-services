const mongoose = require('mongoose');

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/dbname';

const Data = require('./db/seeders/users.seeder.js')
/**
 * Seeders List
 * order is important
 * @type {Object}
 */
module.exports.seedersList = {
  Data,
};
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
module.exports.connect = async () =>
  await mongoose.connect(mongoURL, { useNewUrlParser: true });
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
module.exports.dropdb = async () => mongoose.connection.db.dropDatabase();
