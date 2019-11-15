/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("assets"));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/doubling", (req, res) => {
  if (req.query.input) {
    res.send({
      received: req.query.input,
      result: req.query.input * 2
    });
  } else {
    res.send({ error: "Please provide an number!" });
  }
});

app.get("/greeter", (req, res) => {
  const { name, title } = req.query;
  if (name && title) {
    res.send({
      welcome_message: `Oh, hi there ${name}, my dear ${title}!`,
    });
  } else if (name) {
    res.send({
      error: "Please provide a title!",
    });
  } else if (title) {
    res.send({
      error: "Please provide a name!",
    });
  } else {
    res.send({
      error: "Please provide a name and a title!",
    });
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
