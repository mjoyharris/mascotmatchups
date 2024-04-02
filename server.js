//server.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Access token - replace with your actual token
const accessToken = 'IGQWRQdWNvdHpsRWVSVTlVNXNqZAjJnN0tqaElGeGNpRXc2MkFHZAVZAUZATNHVlBpcW51T0NKMFFYTWpCYllnMFFFWkljTHZAsUWhfeVd4cENDSXI0a0lMZAjZARQUxvM25DaG1aaEY3WlJ3ZAGhDZAkY0TEZA0YzUxZAS15NTgZD';

app.use(express.static('public'));

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

