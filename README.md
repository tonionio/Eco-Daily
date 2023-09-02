# Eco-Daily

Eco-Daily is a web platform dedicated to promoting sustainability. It provides users with daily sustainability tips, showcases eco-friendly products, and offers insights based on specific newspaper addresses.

## Overview

### Technologies and Tools Used:

- **Bootstrap**: A popular front-end framework for building responsive and mobile-first websites.
- **JavaScript**: The scripting language used to create dynamic content and handle API requests.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building the backend.
- **Heroku**: A cloud platform that lets companies build, deliver, monitor, and scale apps.
- **Earthwise API**: A custom-built API that serves sustainability tips, eco-friendly product spotlights, and specific tips based on newspaper addresses. [Details here](https://github.com/tonionio/earthwiseAPI).
- **GitHub**: Used for version control, collaborative development, and hosting the project repository.

## Installation

API Key Configuration
To run this application locally or in a production environment, you'll need to provide your own API key for the Earthwise API.

Steps to Configure the API Key:
Obtain the API Key: Visit Earthwise on RapidAPI to sign up and get your API key.

Add the API Key to the Application:

Locate the api.js file in the project.
Find the line: const API_KEY = "YOUR_API_KEY_HERE";
Replace "YOUR_API_KEY_HERE" with your actual API key from RapidAPI.
Run the Application: After adding the API key, you can run the application as per the instructions provided in this README.

1. Clone the repository:
git clone https://github.com/tonionio/Eco-Daily.git

2. Navigate to the project directory:
cd Eco-Daily

3. Open `index.html` in your preferred browser.

## Usage

Once on the website, users can explore the daily sustainability showcase. Each tip or product is accompanied by a "View More" button, directing users to detailed information.

## Development

The project's backend is developed using Node.js and is hosted on Heroku. The Earthwise API, integral to the project, serves as the primary data source, providing a range of sustainability-related content.

## Credits

Developed by [tonionio](https://github.com/tonionio).

## License

This project is open source and available under the [MIT License](LICENSE).
