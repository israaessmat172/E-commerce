const express = require("express");
const db = require("./db");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
require("dotenv/config");

app.use(bodyParser.json());
app.use(morgan("tiny"));

const productsRouter = require("./routes/products");
const usersRouter = require("./routes/users");
const categoriesRouter = require("./routes/categories");
const ordersRouter = require("./routes/orders");

const api = process.env.API_URL;

app.use(`${api}/products`, productsRouter);
app.use(`${api}/users`, usersRouter);
app.use(`${api}/orders`, ordersRouter);
app.use(`${api}/categories`, categoriesRouter);

app.listen(5000, () => {
  console.log(api);
  console.log("Backend server is running!");
});
