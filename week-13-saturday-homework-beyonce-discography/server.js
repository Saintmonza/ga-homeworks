import express from 'express';
import router from './beyonce-discography/config/router.js';
import { port } from './beyonce-discography/config/environment.js';
import { connectDb } from './beyonce-discography/db/helpers.js';

const app = express();

app.use(express.json());

app.use('/api', router);

async function startServer() {
  try {
    await connectDb();
    console.log("💃🏾 Beyonce's internet is connected");
    app.listen(port, () => console.log(`💃🏾 Listening on Port: ${port}`));
  } catch (err) {
    console.log('💃🏾 uh oh, uh oh, oh no, no!', err);
  }
}

startServer();
