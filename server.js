const express = require('express');
let fetch;
import('node-fetch').then(module => {
    fetch = module.default;
});
const app = express();

app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;

// Point directly to the Heroku API
const API_ENDPOINT = 'https://earthwiseapi-9818faf2b109.herokuapp.com';

app.use(express.json());

// Proxy endpoint for fetching general tips
app.get('/tips', async (req, res) => {
    try {
        const response = await fetch(`${API_ENDPOINT}/tips`);

        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error fetching tips:", error);
        res.status(500).json({ error: error.message });
    }
});

// Proxy endpoint for fetching specific tip
app.get('/tips/:newspaperAddress', async (req, res) => {
    try {
        const { newspaperAddress } = req.params;
        const response = await fetch(`${API_ENDPOINT}/tips/${newspaperAddress}`);
        
        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error fetching specific tip:", error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
