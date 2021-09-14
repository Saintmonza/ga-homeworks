import express from 'express';
import musicController from '../controllers/musicController.js';

const router = express.Router();

router
  .route('/albums')
  .get(musicController.getAllAlbums)
  .post(musicController.createAlbum);

router
  .route('/albums/:id')
  .get(musicController.getAlbum)
  .delete(musicController.deleteAlbum)
  .put(musicController.updateAlbum);

export default router;
