const Report = require("../models/Report");
const natural = require("natural");
const Sentiment = require("sentiment");

const sentiment = new Sentiment();
const tokenizer = new natural.WordTokenizer();

// 🔍 Custom hybrid sentiment analyzer (dictionary + sentiment package)
function analyzeSentiment(text) {
  const positiveWords = [
    "good", "great", "excellent", "positive", "successful", "improved",
    "beneficial", "growth", "increase", "boost", "strong", "profit", "happy",
    "progress", "gain", "optimistic", "better", "achievement"
  ];
  const negativeWords = [
    "bad", "poor", "negative", "decline", "decrease", "weak", "loss",
    "problem", "issue", "concern", "fail", "delay", "drop", "complaint",
    "crisis", "risk", "error", "challenge"
  ];

  let score = 0;
  const words = text.toLowerCase().split(/\W+/);

  words.forEach((word) => {
    if (positiveWords.includes(word)) score++;
    if (negativeWords.includes(word)) score--;
  });

  // Combine with sentiment package for hybrid scoring
  const sentimentScore = sentiment.analyze(text).score;
  const finalScore = score + sentimentScore;

  if (finalScore > 1) return "Positive";
  if (finalScore < -1) return "Negative";
  return "Neutral";
}

// 🧠 Generate NLP-enhanced report
exports.generateReport = async (req, res) => {
  try {
    const { title, department, rawText } = req.body;

    if (!title || !rawText) {
      return res.status(400).json({ error: "Title and raw text are required" });
    }

    // Tokenization
    const tokens = tokenizer.tokenize(rawText);

    // Sentiment analysis
    const sentimentLabel = analyzeSentiment(rawText);

    // Keyword extraction
    const frequencyMap = {};
    tokens.forEach((word) => {
      const w = word.toLowerCase();
      if (w.length > 3) frequencyMap[w] = (frequencyMap[w] || 0) + 1;
    });

    const keywords = Object.entries(frequencyMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([word]) => word);

    // Summary
    const summary = `The ${department} department submitted a report with ${tokens.length} words. Sentiment is ${sentimentLabel}. Key terms: ${keywords.join(", ")}.`;

    // Save report
    const report = await Report.create({
      title,
      department,
      rawText,
      summary,
    });

    res.json({ ...report.toObject(), sentiment: sentimentLabel, keywords });
  } catch (error) {
    console.error("Error generating report:", error);
    res.status(500).json({ error: "Failed to generate report" });
  }
};

// 📜 Fetch all reports
exports.getAllReports = async (req, res) => {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch reports" });
  }
};
