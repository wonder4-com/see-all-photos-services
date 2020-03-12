const vResponse = require('v-response');
const Photo = require('./model.js');

exports.createPhoto = (req, res, next) => {
  const photoBody = req.body;
  const newPhoto = new Photo(photoBody);
  newPhoto.save()
    .then((saved) => {
      if (!saved) {
        return res.status(400).json(vResponse.ApiResponse(false, 400, 'unable to seed photos'));
      }
      if (saved) {
        return res.status(201).json(vResponse.ApiResponse(true, 201, 'photo created successfully', saved));
      }
    }).catch((error) => {
      return res.statuss(500).json(vResponse.ApiResponse(false, 500, 'an errror occured', undefined, error));
    });
};
