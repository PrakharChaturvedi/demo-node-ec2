const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // <-- allow all origins
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Node.js demo is running!");
});

app.get("/health", (req, res) => {
  res.status(200).send("Health check is perfect");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
