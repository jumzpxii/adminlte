const db = require("../connection/connect");

exports.insertTeam = (req, res, next) => {
  const body = req.body;
  // res.send(body)
  console.log(body);
  next();
};

exports.getIndex = (req, res) => {
  res.send("xxxx");
};
