const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_ENDPOINT = 'https://earthwise.p.rapidapi.com/tips'; // This is the RapidAPI endpoint

app.use(express.static(__dirname));
app.use(express.json());

// Proxy endpoint for fetching general tips
app.get('/fetchGeneralTips', async (req, res) => {
    try {
        const response = await fetch(API_ENDPOINT, {
            headers: {
                "X-RapidAPI-Host": "earthwise.p.rapidapi.com",
                "X-RapidAPI-Key": process.env.RAPIDAPI_KEY
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error fetching tips:", error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
