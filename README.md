# Travel Itinerary Planner

**Travel Itinerary Planner** is a travel itinerary planning tool built on the Electron and Google Places APIs. It generates a smart itinerary for a given destination and number of days, including tourist attractions, hotels, and recommended modes of transport.
Software Development Process
This project adopted the Agile methodology, using the Scrum framework, with fortnightly Sprints to deliver trip generation and atlas functionality, amongst other things.

# Reasons for choosing Agile

**Dynamic requirements** Agile allows for the prioritisation of high-demand functionality (e.g. real-time route adjustments) based on user feedback.
**Technical Risk Control** Support for step-by-step validation of data integrations, such as switching to local caching for latency issues.
**Collaboration Transparency** Utilise Jira for task tracking and daily stand-ups to ensure effective communication.

## Core Functionality
**Trip generation** Suggest activities based on user input.
**Dynamic Adjustment**Alert users to foot traffic and suggest alternatives.

## Market Segments
**Individual travellers (18-35 years old)** 65% growth expected by 2023.
**Family users** 85% seeking child-friendly options.
**Business travellers** looking to significantly reduce planning time.

## Competitive Advantages
**Personalised algorithms** improve user satisfaction.
**Offline mode** local caching for areas with poor network coverage.

## Features

- **Get data from Google Places API**: get information about tourist attractions and hotels.
- **Generate itinerary with recommended transport modes (walk, metro, taxi)**.
- **Save itinerary as a text file for easy sharing**.

## Demo video

https://youtu.be/-JFYyzTutr4

## Installation guide

### 1. Install Node.js

Download and install the appropriate version for your operating system from the [Node.js website](https://nodejs.org).

### 2. Clone the repository

Clone the repository using the following command:

```bash
git clone https://github.com/Chepinjia/TravelPlanner-App.git
```

### 3. Installing dependencies

Go to the project directory and install all necessary dependencies:

```bash
cd TravelPlanner-App
npm install
```

### 4. Setting environment variables

In order to run the project, you need to create a `.env` file in the root directory and add the following:

```
API_KEY=your_api_key_here
```

Please replace `your_api_key_here` with your own Google Places API key. You can generate the API key in [Google Cloud Console](https://console.cloud.google.com/).

Make sure to add `.env` to the `.gitignore` file to avoid exposing sensitive information:

``
.env
node_modules/
```

## Running the application

To start the application, run the following command:
```bash
npx electron .
```

The application window should open, allowing you to enter your destination and generate an itinerary.


### Troubleshooting

### Error: ‘API_KEY is missing’


Make sure you have created the `.env` file in the root directory and added your API key. Check that the `.env` file is formatted correctly

```
API_KEY=your_api_key_here
```
## Contribution Guidelines
Contributions are welcome! Please follow the steps below:

-Fork this repository
-Create a new branch (git checkout -b feature-branch)
-Commit your changes (git commit -m ‘Add new feature’)
-Push to the branch (git push origin feature-branch)
-Committing a pull request

## Licence
This project is under the MIT licence, see the LICENSE file for details.

## Acknowledgements
Thank you to all who provided support for this project!


