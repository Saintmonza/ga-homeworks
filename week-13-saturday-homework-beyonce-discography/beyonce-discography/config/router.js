import express from 'express';
import albumsController from '../controllers/albumsController.js';
import commentController from '../controllers/commentController.js';
import singlesController from '../controllers/singlesController.js';
import userController from '../controllers/userController.js';
import secureRoute from '../middleware/secureRoute.js';

const Router = express.Router();

Router.route('/albums')
  .get(albumsController.getAllAlbums)
  .post(secureRoute, albumsController.createAlbum);

Router.route('/albums/:id')
  .get(albumsController.getAlbum)
  .put(secureRoute, albumsController.updateAlbum)
  .delete(secureRoute, albumsController.deleteAlbum);

// Route for creating a comment
Router.route('/albums/:id/comment').post(commentController.createComment);

Router.route('/albums/:id/comment/:commentId')
  .put(secureRoute, commentController.updateComment)
  .delete(secureRoute, commentController.deleteComment);

Router.route('/singles')
  .get(singlesController.getAllSingles)
  .post(secureRoute, singlesController.createSingle);

Router.route('/singles/:id')
  .get(singlesController.getSingle)
  .put(secureRoute, singlesController.updateSingle)
  .delete(secureRoute, singlesController.deleteSingle);

Router.route('/singles/:id/albums').get(
  singlesController.getAllAlbumsForSingle
);
Router.route('/albums/:id/singles').get(albumsController.getAllSinglesForAlbum);

Router.route('/register').post(userController.registerUser);

Router.route('/login').post(userController.loginUser);

export default Router;