const express = require("express");
const PORT = 8000 || process.env.PORT;

const app = express();

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});

module.exports = app;
