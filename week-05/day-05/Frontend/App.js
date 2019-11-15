/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const express = require("express");
const path  = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('assets'));

app.get("/", (req, res) =>
 res.sendFile(path.join(__dirname, 'index.html'))
 );

 app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
 
