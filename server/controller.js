/* eslint-disable no-unused-expressions */
// const mongoose = require('mongoose');
// const Model = require('./model.js');
// import photo model from db (this may have to be rewritten)
const Photo = require('../db/model.js');

exports.seeAllPhotos = (req, res) => {
  Photo.find({}, (err, photo) => {
    if (err) {
      res.send(err);
    }
    res.json(photo);
  });
};

exports.addAPhoto = (req, res) => {
  const newPhoto = new Photo(req.body);
  newPhoto.save((err, photo) => {
    if (err) {
      res.send(err);
    }
    res.json(photo);
  });
};

// photoid is the passed in value from the get request
exports.ReadAPhoto = (req, res) => {
  // eslint-disable-next-line no-unused-expressions
  // eslint-disable-next-line no-sequences
  Photo.findById(req.params.photoId), (err, photo) => {
    if (err) {
      res.send(err);
    }
    res.json(photo);
  };
};

exports.updateAPhoto = (req, res) => {
  Photo.findOneAndUpdate({ _id: req.params.photId }, req.body, { new: true }, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

exports.deleteAPhoto = (req, res) => {
  Photo.remove({ _id: req.params.taskId }, (err, photo) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: `${photo} successfully deleted` });
  });
};
