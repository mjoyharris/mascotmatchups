const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Environment variables for storing sensitive information
const accessToken = 'IGQWRNZAVhOUG9wMW9UQ3pCdng1VGthZAVQ5dlRYUEgxWWRTUUoxc19JWHc1TWxzVUREeVg4bnhyWEt4RDlwN1lEN3hMcUtGazlRNWl5dTFCZAkNUZA0JwOW5sRzV0LWphWWtjT1AzSGJ2d2tJaFlRMy1PNzhJWDg1NmsZD'; // Replace with your actual access token

app.use(express.static('public')); // Serve static files from the public directory

// Endpoint to get Instagram photos
app.get('/instagram-photos', async (req, res) => {
    try {
        const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${accessToken}`);
        console.log('Instagram API response:', response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching Instagram photos:', error);
        container.innerHTML = `<p>Failed to load Instagram photos. Error: ${error}</p>`;
    }
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

const cors = require('cors');
app.use(cors());
