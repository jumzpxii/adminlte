const { connect } = require("http2");
const mysql = require("mysql");
const { createConnection } = require("net");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "adminlte",
});
db.connect();
module.exports = db
