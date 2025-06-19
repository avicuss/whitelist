const express = require("express");
const app = express();

const whitelist = {
  "123456": "CODE1",
  "234567": "CODE2",
  "345678": "CODE3"
};

app.get("/whitelist", (req, res) => {
  const placeId = req.query.placeId;
  if (whitelist[placeId]) {
    res.json({ code: whitelist[placeId] });
  } else {
    res.status(404).json({ error: "Place ID not whitelisted" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Whitelist API running on port", port);
});
