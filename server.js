const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Environment variables for storing sensitive information
const accessToken = 'YOUR_ACCESS_TOKEN'; // Replace with your actual access token

app.use(express.static('public')); // Serve static files from the public directory

// Endpoint to get Instagram photos
app.get('/instagram-photos', async (req, res) => {
    try {
        // Make a request to the Instagram API for your media
        const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${accessToken}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching Instagram photos', error);
        res.status(500).json({ error: 'Error fetching Instagram photos' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
