const express = require("express");
const db = require("./db");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const productsRouter = require("./routers/products");
app.use(bodyParser.json());
app.use(morgan("tiny"));
require("dotenv/config");

const api = process.env.API_URL;

app.use(`${api}/products`, productsRouter);

app.listen(5000, () => {
  console.log(api);
  console.log("Backend server is running!");
});
