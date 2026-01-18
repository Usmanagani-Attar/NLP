const axios = require('axios');

async function fetchReports() {
  try {
    const response = await axios.get('http://localhost:5000/api/reports');
    console.log("📊 All Reports:\n", response.data);
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

fetchReports();
