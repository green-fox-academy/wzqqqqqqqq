/* eslint-disable no-undef */
const express = require("express");
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set("view engine", "ejs");

// home page
app.get("/", (req, res) => {
  // render `home.ejs`
  let { name } = req.query;
  let user = name !== undefined ? name : "Guest";
  res.render("home", { title: `Welcome back, ${user}` });
});
// app.get("/?name=:name", (req, res) => {
//   res.render("home", { name: req.query.name || 'Guest' });
// });
// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
