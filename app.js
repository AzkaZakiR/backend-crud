require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const errorController = require("./controllers/errorController");
const router = require("./routes");

const app = express();

// Using middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  req.requestTime = new Date();
  next();
});
app.use("/coba", (req, res) => {
  res.send("This is a simple test aaa.");
});
app.use(router);



app.use(errorController.onLost);
app.use(errorController.onError);

module.exports = app;
