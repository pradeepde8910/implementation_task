const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 9000;

// Middleware function to log request details
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

// Route to get data from YouTube Data API
app.get('/youtube', async (req, res) => {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: 'land cruiser 300',
        key: 'AIzaSyC-ztu1utpD0b5oYfV--BbG8Vcl3Ok__aw'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
