const Controller = require('./controller');

// various routes to controller
module.exports = (app) => {
  app.route('../db/model')
  // to display all photos (default)
    .get(Controller.seeAllPhotos)
    // to add a photo (not enabled)
    .post(Controller.addAPhoto);


  app.route('../db/model/:photoId')
    // to get photo by photo id
    .get(Controller.readAPhoto)
    // to change the photo (not enabled)
    .put(Controller.updateAPhoto)
    // to delete a photo (not enabled)
    .delete(Controller.deleteAPhoto);
};
