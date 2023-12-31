require("dotenv").config();
const cors = require("cors");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.json("Wassap Server!");
});

app.get("*", (req, res) => {
    res.sendStatus("404");
  });

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
