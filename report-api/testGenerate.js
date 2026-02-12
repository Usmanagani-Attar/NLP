const axios = require('axios');

console.log("📡 Sending request to /api/reports/generate ...");

async function testReport() {
  try {
    const response = await axios.post('https://nlp-gv28.onrender.com/api/reports/generate', {
      title: "Q4 Sales Report",
      department: "Sales",
      data: [
        "Revenue increased by 12% this quarter.",
        "Customer satisfaction improved significantly.",
        "We launched 3 new products successfully."
      ]
    });
    console.log("✅ Response from API:\n", response.data);
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

testReport();
