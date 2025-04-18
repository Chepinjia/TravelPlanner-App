require('dotenv').config(); // 加载环境变量

const API_KEY = process.env.API_KEY; // 从环境变量中读取 API 密钥

if (!API_KEY) {
  console.error("API_KEY is not set. Please check your .env file.");
  alert("API_KEY is missing. Please configure your API key in the .env file.");
}

const API = {
  getPlaces: async (destination) => {
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=tourist+attractions+in+${encodeURIComponent(destination)}&key=${API_KEY}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      console.log("Google Places API Response:", data); // 调试日志
      return data.results?.map(place => place.name) || ["No attractions found for this destination."];
    } catch (error) {
      console.error("Error fetching places:", error.message);
      return ["Failed to load attractions. Please check your network connection or API key."];
    }
  },

  getHotels: async (destination) => {
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels+in+${encodeURIComponent(destination)}&key=${API_KEY}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      console.log("Google Hotels API Response:", data); // 调试日志
      return data.results?.map(hotel => ({
        name: hotel.name || "Unnamed Hotel",
        price: "Price not available",
        rating: `${hotel.rating ? `${hotel.rating} (${hotel.user_ratings_total || 0} reviews)` : "No rating"}`,
      })) || [
        { name: "No hotels found for this destination.", price: "", rating: "" },
      ];
    } catch (error) {
      console.error("Error fetching hotels:", error.message);
      return [
        { name: "Failed to load hotels. Please check your network connection or API key.", price: "", rating: "" },
      ];
    }
  },
};

// 行程生成器
async function generateItinerary(destination, days) {
  const attractions = await API.getPlaces(destination);
  const hotels = await API.getHotels(destination);

  const transportOptions = [
    { type: "Walking", icon: "🚶", time: "10-15 min" },
    { type: "Subway", icon: "🚇", time: "20-30 min" },
    { type: "Taxi", icon: "🚖", time: "15-25 min" },
  ];

  return Array.from({ length: Math.min(days, 15) }, (_, i) => {
    const randomTransport = transportOptions[Math.floor(Math.random() * transportOptions.length)];
    return {
      day: i + 1,
      attractions: [attractions[i % attractions.length] || "Unknown Attraction"], // 确保不会访问 undefined
      transport: `${randomTransport.icon} ${randomTransport.type} (${randomTransport.time})`,
      hotel: hotels[i % hotels.length] || {
        name: "Unknown Hotel",
        price: "Price not available",
        rating: "No rating",
      },
    };
  });
}

// DOM 交互
document.getElementById('generate-btn').addEventListener('click', async () => {
  const destination = document.getElementById('destination').value.trim();
  const days = parseInt(document.getElementById('days').value);
  const container = document.getElementById('itinerary-container');
  const saveBtn = document.getElementById('save-btn');

  if (!destination || isNaN(days)) {
    container.innerHTML = '<p class="error">Please enter valid destination and number of days.</p>';
    return;
  }

  if (days < 1 || days > 15) {
    container.innerHTML = '<p class="error">Number of days must be between 1 and 15.</p>';
    return;
  }

  container.innerHTML = '<div class="loading">Generating smart itinerary...</div>';

  try {
    const itinerary = await generateItinerary(destination, days);

    container.innerHTML = `
      <h2>${destination} Itinerary Preview</h2>
      ${itinerary.map(day => `
        <div class="day-card">
          <h3>Day ${day.day}: ${destination} Highlights</h3>
          <div class="attraction">
            <strong>Main Attraction:</strong> ${day.attractions[0]}
          </div>
          <div class="transport">
            <strong>Recommended Transport:</strong> ${day.transport}
          </div>
          <div class="hotel">
            <strong>Hotel Suggestion:</strong> 
            ${day.hotel.name} • ${day.hotel.price} • ${day.hotel.rating}
          </div>
        </div>
      `).join('')}
    `;

    saveBtn.classList.remove('hidden');
  } catch (error) {
    container.innerHTML = `<p class="error">Error: ${error.message}</p>`;
  }
});

// 保存功能
document.getElementById('save-btn').addEventListener('click', () => {
  const itinerary = document.getElementById('itinerary-container').innerText;

  const blob = new Blob([itinerary], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = `itinerary_${new Date().toISOString().slice(0, 10)}.txt`;
  a.click();

  alert('Itinerary saved successfully!');
});