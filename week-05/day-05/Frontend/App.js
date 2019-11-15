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

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
