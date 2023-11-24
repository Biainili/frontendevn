// scraper.js

const axios = require("axios");
const cheerio = require("cheerio");

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://rate.am/ru/armenian-dram-exchange-rates/exchange-points/cash/retail"
    );
    const $ = cheerio.load(response.data);

    const currencyData = [];

    $("table tr").each((index, element) => {
      const tdElements = $(element).find("td");
      if (tdElements.length === 0) return;

      const currencyObject = {
        name: $(tdElements[0]).text(),
        buyRate: $(tdElements[1]).text(), // Corrected index
        sellRate: $(tdElements[2]).text(),
      };

      currencyData.push(currencyObject);
    });

    return currencyData;
  } catch (error) {
    console.error("Error fetching and parsing data:", error);
    throw error;
  }
};

module.exports = { fetchData };
