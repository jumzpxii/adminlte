const db = require("../connection/connect");
const moment = require('moment');
const distance = require('../fakedata/distance')
const zone = require('../fakedata/zones')
const speed = require('../fakedata/speed')
/// Distance Function ///
const distanFn = (dt) =>{
  var distanData = [];
  const leng = dt.length
  for(let i = 0;i < leng; i++){
    const val = dt[i].values
    let lastArr = val[val.length-1];
    distanData.push([lastArr.value])
  }
  return distanData;
}
/// Speed Function ///
const speedFn = (sp) =>{
  var speedData = [];
  const leng = sp.length;
  for(let i = 0;i < leng; i++){
    const val = sp[i].values
    var maxVal = Math.max(...val.map(m=>m.value));
    speedData.push([maxVal]);
  }
  return speedData;
}
/// Zone Function ///
const zoneFn = (zone) =>{
  var zoneData = [];
  const leng = zone.zones.length;
  const zoneName = zone.zones
  for (i = 0; i < leng; i++) {
    let zName = zoneName[i].tags;
    for (j = 0; j < zName.length; j++) {
      let count = zName[j].count;
      // console.log(`${j}->`,count);
      // zoneData.push([a,b])
    }
  }
  return zoneData;
}
  // let distanX = distanFn(distance.data)
  // let speedX = speedFn(speed.data)
  // let zoneX = zoneFn(zone.data)
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

exports.addtags = (req,res) => {
  const {count,zone,tag} = req.body
  let sql = "INSERT INTO tag_person (tag_id,tag_name,zone,times) VALUES ?"
  let value = [
    ['TAX001',tag,zone,count.toString()]
  ]

  db.query(sql,[value],(err,result)=>{
    if(err) throw err
    res.json("success");
  })
  // db.end();
}

exports.getMyteam = (req,res) =>{
  let sql = 'SELECT * FROM teams';
  db.query(sql,(err,result)=>{
    res.json(result)
  })
}

exports.getProfile = (req,res)=>{
  const body = req.body.mid;
  let sql = 'SELECT * FROM teams WHERE mid = ?';
  db.query(sql,[body],(err,result)=>{
    res.json(result)
  })
}
