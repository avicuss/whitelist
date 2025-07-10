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
  const gameId = req.body.gameId;

  if (typeof gameId !== "number") {
    return res.status(400).send("Missing or invalid gameId");
  }

  if (allowedGameIds.includes(gameId)) {
    res.set("Content-Type", "text/plain");
    return res.send('print("hello")');
  } else {
    return res.status(403).send("Forbidden");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Whitelist server listening on port ${PORT}`);
});
