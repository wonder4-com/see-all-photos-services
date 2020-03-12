const Seeder = require("mongoose-data-seed");
const Model = require("../model.js");
const data = require("./seedFile");

// const data = [{

// }];

const UsersSeeder = class Seeder {
  async shouldRun() {
    return Model.countDocuments()
    .exec()
     .then(count => count === 0);
  }
  async run() {
    return Model.create(data);
  }
};

module.exports = UsersSeeder;
