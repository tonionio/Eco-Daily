const BASE_URL = "http://localhost:3000";

// Fetch general sustainability tips
function fetchGeneralTips() {
    return fetch(`${BASE_URL}/fetchGeneralTips`)
        .then(response => response.json());
}

// Fetch specific tip based on newspaper address
// Note: This function will only work if you have a corresponding endpoint on the server side.
function fetchSpecificTip(newspaperAddress) {
    return fetch(`${BASE_URL}/tips/${newspaperAddress}`)
        .then(response => response.json());
}
