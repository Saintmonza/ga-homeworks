import Single from '../models/single.js';
import Album from '../models/album.js';
import { removedAdded } from './helpers.js';

async function getAllSingles(_req, res, next) {
  try {
    const singles = await Single.find();
    return res.status(200).json(singles);
  } catch (err) {
    next(err);
  }
}

async function getAllAlbumsForSingle(req, res, next) {
  try {
    const { id } = req.params;
    const single = await Single.findById(id).populate('albums');
    return res.status(200).json(single.albums);
  } catch (err) {
    next(err);
  }
}

async function createSingle(req, res, next) {
  try {
    const newSingle = await Single.create(req.body);

    await Album.updateMany(
      { _id: newSingle.albums },
      { $push: { singles: newSingle._id } }
    );

    return res.status(201).json(newSingle);
  } catch (err) {
    next(err);
  }
}

async function getSingle(req, res, next) {
  const id = req.params.id;

  try {
    const single = await Single.findById(id);

    if (!single) {
      return res.status(404).send({ message: 'You must not know bout me' });
    }

    return res.status(200).json(single);
  } catch (err) {
    next(err);
  }
}

async function deleteSingle(req, res, next) {
  const { id } = req.params;

  try {
    const single = await Single.findByIdAndDelete(id);

    if (!single) {
      return res.status(404).send({ message: 'You must not know bout me' });
    }

    const albumsToRemove = single.albums.map((album) => album.toString());

    await Album.updateMany(
      { _id: albumsToRemove },
      { $pull: { singles: single._id } }
    );

    return res.status(204).json(single);
  } catch (err) {
    next(err);
  }
}

async function updateSingle(req, res, next) {
  const id = req.params.id;

  try {
    const single = await Single.findById(id);

    if (!single) {
      return res.status(404).send({ message: 'You must not know bout me' });
    }

    const [removedAlbums, addedAlbums] = removedAdded(
      single.albums.map((album) => album.toString()),
      req.body.albums
    );

    single.set(req.body);
    const savedSingle = await single.save();

    await Album.updateMany(
      { _id: removedAlbums },
      { $pull: { singles: single._id } }
    );

    await Album.updateMany(
      { _id: addedAlbums },
      { $push: { singles: savedSingle._id } }
    );

    return res.status(200).json(single);
  } catch (err) {
    next(err);
  }
}

export default {
  getAllSingles,
  getAllAlbumsForSingle,
  createSingle,
  getSingle,
  deleteSingle,
  updateSingle,
};
