//server.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Access token - replace with your actual token
const accessToken = 'IGQWRNZAVhOUG9wMW9UQ3pCdng1VGthZAVQ5dlRYUEgxWWRTUUoxc19JWHc1TWxzVUREeVg4bnhyWEt4RDlwN1lEN3hMcUtGazlRNWl5dTFCZAkNUZA0JwOW5sRzV0LWphWWtjT1AzSGJ2d2tJaFlRMy1PNzhJWDg1NmsZD';

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

