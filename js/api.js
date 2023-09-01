require('dotenv').config();

const BASE_URL = "http://localhost:3000";


// Fetch general sustainability tips
function fetchGeneralTips() {
    return fetch(`${BASE_URL}/tips`, {
        method: "GET",
        headers: {
            "X-RapidAPI-Host": "earthwise.p.rapidapi.com",
            "X-RapidAPI-Key": process.env.RAPIDAPI_KEY
        }
    })
    .then(response => response.json());
}

// Fetch specific tip based on newspaper address
function fetchSpecificTip(newspaperAddress) {
    return fetch(`${BASE_URL}/tips/${newspaperAddress}`, {
        method: "GET",
        headers: {
            "X-RapidAPI-Host": "earthwise.p.rapidapi.com",
            "X-RapidAPI-Key": process.env.RAPIDAPI_KEY

        }
    })
    .then(response => response.json());
}
