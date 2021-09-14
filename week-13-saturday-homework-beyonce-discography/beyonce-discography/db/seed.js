import Album from '../models/album.js';
import { albumsSeedData } from './albumsSeedData.js';
import { connectDb, truncateDb, disconnectDb } from './helpers.js';

async function seed() {
  try {
    await connectDb();
    console.log('💃🏾 "1 + 1 = 2" Connected to Beyonce\'s internet');

    await truncateDb();
    console.log('💃🏾 "To the left, to the left" Database dropped');

    const albums = await Album.create(albumsSeedData);
    console.log(
      `💃🏾 "Get in formation" ${albums.length} albums add to the database`
    );
    console.log('💃🏾 "Finally you put my love on top!" Goodbye!');
  } catch (err) {
    console.log(
      '💃🏾 "Uh oh, oh, no, no!" Something went wrong seeding the database',
      err
    );
  }
  disconnectDb();
}

seed();
