const express = require("express");
const app = express();
const path = require("path");

// Set the view engine to EJS
app.set("view engine", "ejs");
// Set the views directory
app.set("views", path.join(__dirname, "views"));

// A middleware function that logs the request method and URL
app.use((req, res, next) => {
  console.log(req.method, req.url);
});

// A route that renders the index view
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("LISTENIN ON PORT 3000");
});
