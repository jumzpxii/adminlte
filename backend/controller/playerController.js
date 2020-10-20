const db = require("../connection/connect");

exports.getPlayer = (req,res) =>{
  const sql = 'SELECT * FROM person'
  db.query(sql,(err,result)=>{
    res.json({
      status:'success',
      data:result
    })
  })
}
exports.register = (req,res)=>{
  const {pid,fname,lname,position} = req.body;
    let sql = "INSERT INTO person (pid,fname,lname,position) VALUES ?"
    let values = [
      [pid,fname,lname,position]
    ]
    db.query(sql,[values],(err,result)=>{
      if(err) throw err;
      res.json({status: "Success Insert 1 Person"})
  })
}

exports.delPlayer = (req,res)=>{
  const value = req.params.id
  let = sql = "DELETE FROM person WHERE id = ?";
  db.query(sql,[value],(err,result)=>{
    if(err) throw err;
    res.json({status:"Delete 1 Person"})
  })

}
