const express = require("express");
const app = express();
app.use(express.json());

const whitelist = [12345678, 98765432]; // Replace with your real Place IDs

app.post("/check", (req, res) => {
  const placeId = req.body.placeId;
  if (whitelist.includes(placeId)) {
    res.json({
      allowed: true,
      code: `print("✅ Whitelisted Place: ${placeId}")`
    });
  } else {
    res.status(403).json({ allowed: false });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
