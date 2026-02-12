require('dotenv').config();
const app = require('./app');  // Your existing Express app with API routes
const mongoose = require('mongoose');
const path = require('path');  // 🔥 NEW: For serving static files

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI is not defined");
  process.exit(1);
}

async function start() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ MongoDB connected');

    // 🔥 API ROUTES FIRST (keep your existing /api/* routes)
    
    // 🔥 NEW: Serve React static files (CSS, JS, images)
    app.use(express.static(path.join(__dirname, '../report-app/build')));
    
    // 🔥 NEW: Handle React Router (serve index.html for all non-API routes)
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../report-app/build', 'index.html'));
    });

    // Listen on ALL interfaces for Render
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🌐 Frontend: http://localhost:${PORT}`);
      console.log(`📊 API: http://localhost:${PORT}/api`);
    });

  } catch (err) {
    console.error('❌ Server start failed:', err.message);
    process.exit(1);
  }
}

start();
