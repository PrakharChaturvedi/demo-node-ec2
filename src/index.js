const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Simple route for the main page
app.get("/", (req, res) => {
  res.send("Node.js demo is running!");
});

// Health check route with error handling
app.get("/health", (req, res, next) => {
  try {
    res.status(200).send("Health check is perfect");
  } catch (error) {
    console.error("Error in /health route:", error);  
    next(error);  
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err);
  res.status(500).send("Something went wrong!" + err);  
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
