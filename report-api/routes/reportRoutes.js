const express = require('express');
const router = express.Router();
const { generateReport, getAllReports } = require('../controllers/reportController');

// POST → generate new report
router.post('/generate', generateReport);

// GET → fetch all reports
router.get('/', getAllReports);

module.exports = router;
