window.onload = function() {
    fetchGeneralTips()
    .then(data => {
        console.log("All data:", data); // Log all the data
        const showcaseItem = data[Math.floor(Math.random() * data.length)];
        console.log("Selected showcase item:", showcaseItem); // Log the selected showcase item

        // Extract image src from the title field
        const imageSrcMatch = showcaseItem.title.match(/src=\"([^\"]+)\"/);
        const imageSrc = imageSrcMatch ? imageSrcMatch[1] : null;
        const titleText = showcaseItem.title.replace(/<img[^>]*>/, '').trim();

        // Populate the image and title in their respective HTML elements
        if (imageSrc) {
            document.getElementById('showcase-image').src = imageSrc;
            document.getElementById('showcase-image').style.display = 'block'; // Ensure the image is displayed
        } else {
            document.getElementById('showcase-image').style.display = 'none'; // Hide the image if not available
        }
        document.getElementById('showcase-title').textContent = titleText;
        document.getElementById('showcase-link').href = showcaseItem.url;
    })
    .catch(error => {
        document.getElementById('showcase-title').textContent = "Error fetching the daily showcase. Please refresh the page.";
    });
}




// Event listener for fetching a specific tip based on newspaper address
//document.getElementById('fetch-specific-tip').addEventListener('click', function() {
//    const newspaperAddress = document.getElementById('newspaper-address').value;
//    fetchSpecificTip(newspaperAddress)
//    .then(data => {
//        document.getElementById('specific-tip-content').textContent = data.tip;
//    })
//    .catch(error => {
//        document.getElementById('specific-tip-content').textContent = "Error fetching tip. Please try again.";
//    });
// });

// function fetchRandomProduct() {
//     return fetch(`${BASE_URL}/products`, {
//         method: "GET",
//         headers: {
//             "X-RapidAPI-Host": "earthwise.p.rapidapi.com",
//             "X-RapidAPI-Key": ""
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         const randomProduct = data[Math.floor(Math.random() * data.length)];
//         document.getElementById('product-description').textContent = randomProduct.description;
//         document.getElementById('product-image').src = randomProduct.imageURL;
//     })
//     .catch(error => {
//         document.getElementById('product-description').textContent = "Error fetching product. Please try again.";
//     });
// }
