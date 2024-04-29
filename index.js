const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

require('dotenv').config();

const app = express();

//  middleware
app.use(express.json()); // we are not allowed to parse json through our nodejs by default, so we need to use this
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to Database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000.");
    });
  })
  .catch((err) => {
    console.log(err);
  });
