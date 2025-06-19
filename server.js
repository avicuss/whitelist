const express = require("express");
const app = express();

const whitelist = {
  "123456": "CODE1",
  "654321": "CODE2"
};

app.get("/whitelist", (req, res) => {
  const placeId = req.query.placeId;
  if (!placeId) return res.status(400).json({ error: "Missing placeId" });

  if (whitelist[placeId]) {
    res.json({ code: whitelist[placeId] });
  } else {
    res.status(404).json({ error: "Not whitelisted" });
  }
});

app.get("/health", (req, res) => res.send("OK"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));  
