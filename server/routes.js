const Controller = require('./controller');

// various routes to controller
module.exports = (app) => {
  app.route('../db/model');
  // to display all photos (default)
  app.get(Controller.seeAllPhotos);
  // to add a photo (not enabled)
  app.post(Controller.addAPhoto);

  // for single photo
  app.route('../db/model/:photoId');
  // to get photo by photo id
  app.get(Controller.readAPhoto);
  // to change the photo (not enabled)
  app.put(Controller.updateAPhoto);
  // to delete a photo (not enabled)
  app.delete(Controller.deleteAPhoto);
};
