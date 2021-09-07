import express from 'express';
import router from './config/router.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', router);

app.get('/', function (req, res) {
  res.send("Beyonce's discography");
});

app.listen(port, () => {
  console.log(`Beyonce Discography API listening at http://localhost:${port}`);
});
