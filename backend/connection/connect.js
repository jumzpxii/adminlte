const { connect } = require('http2');
const mysql = require('mysql');
const { createConnection } = require('net');
const db = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'adminlte'
});

db.connect();
