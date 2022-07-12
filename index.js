const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(bodyparser.json());

const db = mysql.createConnection({
  host: "10.20.0.91",
  user: "testUser",
  password: "AEmjX5KY;VF#$>R6",
  database: "test_DB",
  port: 1435,
});

db.connect((err) => {
  if (err) {
    console.log(err, "-----------------error-------------------");
  } else {
    console.log("DB connected...");
  }
});

app.listen(3000, () => {
  console.log("server running!");
});
