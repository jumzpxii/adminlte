const db = require('../connection/connect');

exports.insertTeam = (req,res,next) =>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  const body = req.body;
  // res.send(body)
  console.log(body);
  next();
}

exports.getIndex = (req,res) =>{
  res.send('xxxx');
}
