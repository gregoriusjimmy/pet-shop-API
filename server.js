const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { Pool, Client } = require("pg");

const app = express();
const port = 3001;

const item = require("./controllers/item");
const supplier = require("./controllers/supplier");

app.use(bodyParser.json());
app.use(cors());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "pet-shop",
  password: "postgres305",
  port: 5432
});

app.get("/", (req, res) => {
  res.send("it is working");
});

// ITEM CONTROLLER
app.get("/item", (req, res) => {
  item.handleItemGet(req, res, pool);
});

app.post("/item", (req, res) => {
  item.handleItemPost(req, res, pool);
});

app.put("/item", (req, res) => {
  item.handleItemPut(req, res, pool);
});

app.delete("/item", (req, res) => {
  item.handleItemPut(req, res, pool);
});
// END ITEM
// SUPPLIER CONTROLLER
app.get("/supplier", (req, res) => {
  supplier.handleItemGet(req, res, pool);
});
app.post("/supplier", (req, res) => {
  supplier.handleItemPost(req, res, pool);
});
app.put("/supplier", (req, res) => {
  supplier.handleItemPut(req, res, pool);
});
app.delete("/supplier", (req, res) => {
  supplier.handleItemDelete(req, res, pool);
});
// END SUPPLIER
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
