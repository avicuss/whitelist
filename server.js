const express = require("express");
const app = express();

app.use(express.json()); // to parse JSON bodies

// Replace with your actual whitelisted game IDs
const allowedGameIds = [
  7733969706, // example gameId #1
  987654321, // example gameId #2
  // add your game IDs here
];

app.post("/check-game", (req, res) => {
  console.log("Received POST with body:", req.body);
  res.set("Content-Type", "text/plain");
  res.send('print("server reached")');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Whitelist server listening on port ${PORT}`);
});
