// api.js
const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

async function getPlaces(destination) {
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=tourist+attractions+in+${encodeURIComponent(destination)}&key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data.results.map(place => place.name);
  } catch (error) {
    console.error("Error fetching places:", error);
    return ["Main Square", "Local Museum", "Historic District"];
  }
}

async function getHotels(destination) {
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels+in+${encodeURIComponent(destination)}&key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data.results.map(hotel => ({
      name: hotel.name,
      price: "Price not available",
      rating: `${hotel.rating || "No rating"} (${hotel.user_ratings_total || 0} reviews)`
    }));
  } catch (error) {
    console.error("Error fetching hotels:", error);
    return [
      { name: "Luxury Grand Hotel", price: "$350/night", rating: "★★★★★" },
      { name: "Midtown Suites", price: "$210/night", rating: "★★★★" },
      { name: "Budget Inn", price: "$85/night", rating: "★★★" }
    ];
  }
}

module.exports = {
  getPlaces,
  getHotels
};
async function getPlaces(destination) {
  const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=tourist+attractions+in+${encodeURIComponent(destination)}&key=${API_KEY}`;
  console.log("Requesting URL:", url); // 打印请求 URL
  try {
    const response = await axios.get(url);
    console.log("Response data:", response.data); // 打印响应数据
    if (!response.data || !Array.isArray(response.data.results)) {
      console.error("Invalid response from Google Places API:", response.data);
      return ["Main Square", "Local Museum", "Historic District"];
    }
    return response.data.results.map(place => place.name);
  } catch (error) {
    console.error("Error fetching places:", error.message);
    return ["Main Square", "Local Museum", "Historic District"];
  }
}