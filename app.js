const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

// Set the view engine to EJS
app.set("view engine", "ejs");
// Set the views directory
app.set("views", path.join(__dirname, "views"));

// A middleware function that logs the request method and URL
app.use((req, res, next) => {
  console.log(req.method, req.url, res.statusCode);
  next();
});
// Parse request bodies as JSON
app.use(bodyParser.json());

// Parse request bodies as URL-encoded
app.use(bodyParser.urlencoded({ extended: true }));

// A route that renders the index view
app.get("/", (req, res) => {
  res.render("index");
});

// A route that renders the subreddit view
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`Subreddit of ${subreddit}`);
});

// A route that renders the subreddit comments view
app.get("/r/:subreddit/comments/:postID", (req, res) => {
  const { subreddit, postID } = req.params;
  res.send(`${subreddit} comment section ID:${postID}`);
});

// A route that renders the index view
app.get("/project/:projectname", (req, res) => {
  const { projectname } = req.params;
  res.render("project", { projectname });
});

app.listen(3000, () => {
  console.log("LISTENIN ON PORT 3000");
});
