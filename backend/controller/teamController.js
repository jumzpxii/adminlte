const db = require("../connection/connect");
const moment = require('moment');
const distance = require('../fakedata/distance')
const zone = require('../fakedata/zones')
const speed = require('../fakedata/speed')

exports.insertTeam = (req, res) => {
  const mid = req.body.macthId
  const teamName = req.body.teamName
  let startDate = req.body.startDate
  let endDate = req.body.endDate
  const sdate = moment(startDate).utcOffset(7).format('YYYY-MM-DD HH:mm:ss')
  const edate = moment(endDate).utcOffset(7).format('YYYY-MM-DD HH:mm:ss')
  const tags = req.body.tag
  const tagname = req.body.tagName
  var dataset = []
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    const ply = tagname[i];
    dataset.push([mid,teamName,tag,ply,sdate,edate])
  }
    // return res.json({date:dataset,sdate:startDate,edate:endDate});

  let sql = 'INSERT INTO teams (mid,team_name,tag_id,player,from_start,end_time) VALUES ?';
  db.query(sql,[dataset],(err,result)=>{
    return res.json({status:'Success'});
  })
};

exports.searchApi = (req, res, next) => {
  const body = req.body;
  return res.json({
    zoneX:zone.data.zones,
    distanX:distance.data,
    speedX:speed.data
  });
};

exports.getMyteam = (req,res) =>{
  let sql = 'SELECT * FROM teams';
  db.query(sql,(err,result)=>{
    res.json(result)
  })
}

exports.getProfile = (req,res)=>{
  const body = req.body.mid;
  let sql = 'SELECT a.*,b.fname,b.lname FROM teams AS a LEFT JOIN person AS b ON a.player = b.pid WHERE mid = ?';
  db.query(sql,[body],(err,result)=>{
    res.json(result)
  })
}

exports.delTeam = (req,res)=>{
  const value = req.params.mid
  let = sql = "DELETE FROM teams WHERE mid = ?";
  db.query(sql,[value],(err,result)=>{
    res.json({status:"Delete Success"})
  })
}
