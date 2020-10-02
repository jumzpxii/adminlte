const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const teamRoute = require("./rotues/team");
// const db = require('./connection/connect');
const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.use(cors());
app.options("*", cors());

app.use("/team", teamRoute);

app.listen(port, function () {
  console.log(`server is : http://localhost:${port}`);
});
