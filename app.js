const express = require("express");
// const db = require("./db");
const app = express();
require("dotenv/config");

const api = process.env.API_URL;

app.get(`${api}/products`, (req, res) => {
  const product = {
    id: 1,
    name: "hair dresser",
    image: "url",
  };
  res.send(product);
});

app.listen(5000, () => {
  console.log(api);
  console.log("Backend server is running!");
});
