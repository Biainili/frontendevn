// server.js

const express = require("express");
const { fetchData } = require("./scraper");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/fetch-currency", async (req, res) => {
  try {
    const currencyData = await fetchData();
    res.json(currencyData);
  } catch (error) {
    console.error("Error in fetch-currency route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
