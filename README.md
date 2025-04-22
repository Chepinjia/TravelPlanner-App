# Travel Itinerary Planner

**Travel Itinerary Planner** is a travel itinerary planning tool built on the Electron and Google Places APIs. It generates a smart itinerary for a given destination and number of days, including tourist attractions, hotels, and recommended modes of transport.
Software Development Process
This project adopted the Agile methodology, using the Scrum framework, with fortnightly Sprints to deliver trip generation and atlas functionality, amongst other things.
Travel Recommendation App
Overview
The Travel Recommendation App aims to enhance user travel experiences by providing personalized recommendations for attractions, route planning, and hotel bookings.

# Development Process
**Needs Analysis**

Conduct user research to understand needs and pain points.
Perform competitive analysis to identify market trends.
Prioritize features based on research results.
**System Desig**

Define the technology stack and tools for system architecture.
Create database ER diagrams and define the data model.
Design API interfaces for effective communication.
Create UI prototype diagrams for design review.
**Core Development**

Split development by module for independent testing.
Develop core functionalities such as recommendation algorithms and booking systems.
Write unit tests to ensure code quality.
**Integration Testin**

Perform multi-module co-tuning.
Conduct performance pressure testing for system stability.
Verify compatibility with third-party APIs.
**Deployment Go-liv**

Deploy the application in a cloud environment.
Build a monitoring system for real-time health tracking.
Publish in App Store and Google Play.
Maintain Iterations:

Collect user feedback and conduct regular reviews.
Continuously update security patches and optimize features.
# Members (Roles & Responsibilities & Portion)
**Product Manager**

Requirements gathering through surveys and interviews.
Prioritize features based on user feedback.
Communicate with users for experience insights.
Plan the product roadmap for future releases.
**Developers**

Implement the hotel search and recommendation features.
Develop the route planning module using mapping APIs.
Ensure efficient backend development using Java and Django frameworks.
**Testers**

Conduct integration and performance testing.
Report bugs and communicate with the development team.
UI/UX Designer:

Map the user journey to identify optimization points.
Iterate designs based on user feedback.
# Schedule
**Needs Analysis**
Approximately 1 week

User research and interviews
Competitor analysis
Function prioritization
**System Design**
About 1 week

Determine technology selection and architecture design
**Core Development**
About 3 weeks

Module development (recommendation algorithm, route planning, booking system)
Write and execute unit tests
**Integration Testing** 
About 1 week

Multi-module debugging
Performance testing
**Deployment Go-live** 
About 1 week

Cloud environment deployment
Monitoring system setup
**Maintenance Iterations**
Ongoing

Monthly user feedback collection
Functional optimization and security updates
# Algorithm
**Recommendation System**

-**Data Collection**Gather user preferences and attraction data.
-**Data Processing** Normalize and preprocess data.
-**Algorithms Used**
Collaborative filtering for user-based recommendations.
Content-based filtering based on attraction features.
**Route Planning**

-**Input Collection** User-selected attractions and starting points.
-**Algorithms Used**
Dijkstra's algorithm for shortest paths.
A* search algorithm for complex path planning.
-**Output** Recommended routes with navigation details.

**Hotel Recommendations**

-**Data Collection**Gather user reviews and ratings.
-**Algorithms Used**
Generate a composite score for hotels based on user feedback and budget constraints.
# Current Status of Your Software
Work Completed
**Requirements Analysis**

Collected user requirements and defined target user groups.
Defined core functional modules like recommendation systems and hotel bookings.
**System Design**

Completed system architecture and database design.
Developed API interface specifications.
**Ongoing Work**
-**Core Function Development**
Implementing personalized recommendation algorithms.
Developing route planning functionalities with map services.
Accessing real-time hotel data for booking.
# Future Plan
Functionality Expansion
**New Features**

Multi-language support and social sharing features.
Offline mode for access without internet.
**Intelligent Recommendation System**

Integrate deep learning for improved accuracy.
Real-time data integration for optimized travel arrangements.
**User Experience Optimization**
-**UI Improvements**: Enhance interface design and interaction flow.
-**Feedback Mechanism**: Regularly collect user feedback and provide support.
**Marketing Strategy**
-**Promotion**: Use social media and partnerships to attract users.
-**User Growth**: Implement referral incentives and loyalty programs.
**Technical Updates**
-**Performance Monitoring**: Regularly check system performance.
-**Security Enhancements**: Update security measures for user data protection.

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


