const express = require('express');
const { google } = require('googleapis');

const app = express();

async function initYouTubeAPI(req, res, next) {
  try {
    const response = await google.youtube('v3').search.list({
      key: 'AIzaSyC-ztu1utpD0b5oYfV--BbG8Vcl3Ok__aw',
      part: 'snippet',
      channelId: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
      order: 'date',
      type: 'video',
    });
    req.youtubeData = response.data;
    next();
  } catch (error) {
    console.error('Error initializing YouTube API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Simple route to retrieve and send post details
app.get('/posts', initYouTubeAPI, (req, res) => {
  try {
    const posts = req.youtubeData.items.map(item => {
      return {
        description: item.snippet.description,
        title: item.snippet.title,
        thumbnailUrl: item.snippet.thumbnails.default.url,
        videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`
      };
    });

    res.json({ posts });
  } catch (error) {
    console.error('Error processing post details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Serve static files
app.use(express.static('public'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
