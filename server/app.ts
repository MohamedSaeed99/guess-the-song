import express from 'express';
import dotenv from 'dotenv';
import { Buffer } from "buffer";
import axios from 'axios';
import session from 'express-session'
dotenv.config();
const app = express();
const port = 8080;

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

const scope = "streaming user-read-private user-modify-playback-state"

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/spotify/login', (req, res) => {
  res.redirect(`${process.env.SPOTIFY_AUTH_URI}?response_type=code&client_id=${process.env.CLIENT_ID}&scope=${scope}&redirect_uri=${process.env.REDIRECT_URI}`)
});

app.get('/callback', async (req, res) => {
  var code = req.query.code || null;
  var state = req.query.state || null;
  const data = {
    code: code,
    redirect_uri: process.env.REDIRECT_URI,
    grant_type: 'authorization_code'
  }

  const response = await axios.post(process.env.SPOTIFY_TOKEN_URI, data, {
    headers: { 
      'Authorization': `Basic ${Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded' 
    }
  });

  req.session['access_token'] = response.data.access_token;
  req.session['refresh_token'] = response.data.refresh_token;
  req.session['expires_at'] = Date.now() + response.data.expires_in;

  res.redirect(process.env.FE_APPLICATION)
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});