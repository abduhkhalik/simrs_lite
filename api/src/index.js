const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connection = require("../config/db");
const userRoute = require("../routes/userRoutes");
const auth = require("../routes/auth");
const errorHandler = require("../middelware/errorHandler");
const logger = require("../middelware/logger");
const requstTime = require("../middelware/requstTime");
const app = express();

// Middleware
connection.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("database connect");
});

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(errorHandler);
app.use(logger);
app.use(requstTime);

// Router
app.use("/api", userRoute);
app.use("/api/auth", auth);

app.listen(process.env.SERVER_PORT, () => {
  console.log("Server Starting");
});
