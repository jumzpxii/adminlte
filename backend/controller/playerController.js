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

exports.getProfile = (req,res) =>{
  const value = req.params.pid
  const sql = 'SELECT a.*, b.fname, b.lname , b.lname, b.position FROM teams AS a LEFT JOIN person AS b ON a.player = b.pid WHERE a.player = ?';
  db.query(sql,[value],(err,result)=>{
    res.json(result)
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
  const value = req.params.pid
  let = sql = "DELETE FROM person WHERE pid = ?";
  db.query(sql,[value],(err,result)=>{
    if(err) throw err;
    res.json({status:"Delete 1 Person"})
  })

}
