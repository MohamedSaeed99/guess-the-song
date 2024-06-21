import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/spotify/login', (req, res) => {
  let scope = 'user-read-private user-read-email';

  res.redirect(`https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.CLIENT_ID}&scope=${scope}&redirect_uri=${process.env.REDIRECT_URI}`)
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});