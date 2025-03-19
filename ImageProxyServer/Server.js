// server.js
import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET'); // Allow only GET requests
    next();
});

// Proxy endpoint
app.get('/proxy', async (req, res) => {
    const imageUrl = req.query.url; // Get the image URL from the query parameter

    if (!imageUrl) {
        return res.status(400).send('URL parameter is required');
    }

    try {
        // Fetch the image from the external URL
        const response = await fetch(imageUrl);

        // Check if the response is OK
        if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.statusText}`);
        }

        // Set the appropriate headers for the browser
        res.set('Content-Type', response.headers.get('content-type'));
        res.set('Content-Length', response.headers.get('content-length'));

        // Stream the image back to the browser
        response.body.pipe(res);
    } catch (error) {
        console.error('Proxy error:', error);
        res.status(500).send('Proxy error');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});