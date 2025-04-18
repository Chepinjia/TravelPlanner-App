<<<<<<< HEAD
<<<<<<< HEAD
Travel Itinerary Planner
This is a travel itinerary planning tool built with Electron and the Google Places API. It generates a smart itinerary for a given destination and number of days, including tourist attractions, hotels, and recommended transport options.

Features
Fetches tourist attractions and hotels from the Google Places API.
Generates an itinerary with recommended transport options (walking, subway, taxi).
Saves the itinerary as a text file for easy sharing.
Demo Video
A demo video will be available soon.

Installation
1. Install Node.js
Download and install Node.js from https://nodejs.org.

2. Clone the Repository
Clone this repository using the following command:

bash
深色版本
git clone https://github.com/your-username/travel-itinerary-planner.git
3. Install Dependencies
Navigate to the project directory and install dependencies:

bash
深色版本
cd travel-itinerary-planner
npm install
4. Set Up Environment Variables
To run this project, you need to create a .env file in the root directory with the following content:

plaintext
深色版本
API_KEY=your_api_key_here
Replace your_api_key_here with your actual Google Places API key. You can generate an API key from the Google Cloud Console.

Make sure to add .env to your .gitignore file to avoid exposing sensitive information:

plaintext
深色版本
.env
node_modules/
Running the Application
To start the application, run the following command:

bash
深色版本
npx electron .
The app window should open, allowing you to input a destination and generate an itinerary.

Preparing for the Video Demo
Test the App Locally
Make sure the app runs correctly on your machine before recording the demo.
Verify that the API key is correctly configured and data is fetched successfully.
Record the Demo
Use a screen recording tool (e.g., OBS Studio, Loom, or any built-in screen recorder) to record the app in action:
Show the input fields for destination and number of days.
Demonstrate generating an itinerary.
Save the itinerary and verify the output file.
Upload the Video
Share the recorded video with the team via email, Google Drive, or any other preferred method.
Troubleshooting
Error: "API_KEY is missing"
Ensure you have created a .env file in the root directory and added your API key.
Double-check the format of the .env file: API_KEY=your_api_key_here.
No Data Returned
Verify that your API key is valid and has access to the Google Places API.
Check the destination input for typos or unsupported locations.
Other Issues
Check the browser console (press F12) for detailed error messages.
Contact the project maintainer if the issue persists.
License
This project is licensed under the MIT License. See the LICENSE file for details.
=======
# TravelPlanner-App
>>>>>>> 405e425777e295e453829035f708e9307a685f19
=======

>>>>>>> eee8bef6665b3055b29921ba4a06426dbee548e4
