//server.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.static('assets')); // Serve assets
app.use(express.static(__dirname)); // Serve HTML files

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Serve the index.html file when visiting the root
});


// Access token - replace with your actual token
const accessToken = 'IGQWRQdWNvdHpsRWVSVTlVNXNqZAjJnN0tqaElGeGNpRXc2MkFHZAVZAUZATNHVlBpcW51T0NKMFFYTWpCYllnMFFFWkljTHZAsUWhfeVd4cENDSXI0a0lMZAjZARQUxvM25DaG1aaEY3WlJ3ZAGhDZAkY0TEZA0YzUxZAS15NTgZD';


// This will also serve up static files in the root directory, like your 'index.html'
app.use(express.static(__dirname));


app.get('/instagram-photos', async (req, res) => {
    try {
        const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${accessToken}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error fetching Instagram photos.');
    }
});

/*
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
*/

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

