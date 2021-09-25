import Album from '../models/album.js';

async function getAllAlbums(_req, res, next) {
  try {
    const albums = await Album.find();
    return res.status(200).json(albums);
  } catch (err) {
    next(err);
  }
}

async function createAlbum(req, res, next) {
  try {
    const newAlbum = await Album.create(req.body);
    return res.status(201).json(newAlbum);
  } catch (err) {
    next(err);
  }
}

async function getAlbum(req, res, next) {
  const id = req.params.id;
  try {
    const album = await Album.findById(id);
    return res.status(200).json(album);
  } catch (err) {
    next(err);
  }
}

async function deleteAlbum(req, res, next) {
  const id = req.params.id;
  try {
    const album = await Album.findByIdAndDelete(id);
    album.deleteOne();

    return res.status(200).json(album);
  } catch (err) {
    next(err);
  }
}

async function updateAlbum(req, res, next) {
  try {
    const id = req.params.id;
    const album = await Album.findById(id);
    album.set(req.body);
    album.save();
    return res.status(200).json(movie);
  } catch (err) {
    next(err);
  }
}

export default {
  getAllAlbums,
  createAlbum,
  getAlbum,
  deleteAlbum,
  updateAlbum,
};
