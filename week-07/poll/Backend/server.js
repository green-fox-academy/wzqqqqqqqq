/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

let port = 3001;

app.use(express.json());
app.use(cors());

var mysqlConnection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "123456789",
  database: "doodle"
});

mysqlConnection.connect(err => {
  if (!err) {
    console.log("DB connection successfully.");
  } else {
    console.log("DB failed to connect:" + JSON.stringify(err, undefined, 2));
  }
});

//TO GET ALL POLL
app.get("/api/poll", (req, res) => {
  const SELECT_ALL_QUERY = "SELECT * FROM restaurant";

  mysqlConnection.query(SELECT_ALL_QUERY, (error, result) => {
    if (error) {
      res.status(500).send("DATABASES error.");
    }
    res.status(200).send({
      question: "Where should we go for dinner?",
      optional: result
    });
  });
});

//TO VOTE THEN GET THE UPDATED POLL
app.post("/api/vote/:id", async (req, res) => {
  const id = req.params.id;
  const VOTE_QUERY = `UPDATE restaurant SET votes=votes+1 WHERE id=${id}`;
  const SELECT_ALL_QUERY = "SELECT * FROM restaurant";

  await mysqlConnection.query(VOTE_QUERY);

  mysqlConnection.query(SELECT_ALL_QUERY, (error, result) => {
    if (error) {
      res.status(500).send("DATABASES ERROR");
    }
    res.status(200).json({
      question: "Where should we go for dinner?",
      options: result
    });
  });
});

app.listen(port, () => console.log(`Example app listening on port port!`));
