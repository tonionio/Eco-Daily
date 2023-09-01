
const BASE_URL = "http://localhost:3000";


// Fetch general sustainability tips
function fetchGeneralTips() {
    return fetch(`${BASE_URL}/tips`, {
        method: "GET",
        headers: {
            "X-RapidAPI-Host": "earthwise.p.rapidapi.com",
            "X-RapidAPI-Key": "c5d6879daemsh5d95b0ac00dc5d2p1b154djsn83f5f05ded82"
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
            "X-RapidAPI-Key": "c5d6879daemsh5d95b0ac00dc5d2p1b154djsn83f5f05ded82"
        }
    })
    .then(response => response.json());
}
