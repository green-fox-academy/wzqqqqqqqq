/* eslint-disable no-undef */
const express = require("express");

const app = express();
const PORT = 3000;

let data = [
  {
    id: 1,
    text: "Wake up",
    done: true
  },
  {
    id: 2,
    text: "Do some work",
    done: false
  }
];

app.use(express.json());

app.get("/todos", (req, res) => {
  res.json(result.response);
  res.status(result.statusCode);
});

app.post("/todos", (req, res) => {
  let todos = req.body;

  res.json(result.response);
  res.status(result.statusCode);
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;

  res.json(result.response);
  res.status(result.statusCode);
});

app.put("/todos/:id", (req, res) => {
  const { id } = req.params;

  res.json(result.response);
  res.status(result.statusCode);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
