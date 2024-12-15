const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("../config/db");
const app = express();

// Middleware
connection.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("database connect")
});
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());

app.listen(8000, () => {
  console.log("Server Starting, In Port 8000");
});
