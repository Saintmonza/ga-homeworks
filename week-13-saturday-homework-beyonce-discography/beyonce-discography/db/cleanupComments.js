import Album from '../models/album.js';
import { albumsSeedData } from './albumsSeedData.js';
import { connectDb, disconnectDb, truncateDb } from './helpers.js';

async function cleanupComments() {
  try {
    await connectDb();
    console.log('💃🏾 "Finally you put my love on top!" Goodbye!');

    const allAlbums = await Album.find();
  } catch (err) {
    next();
  }
}
