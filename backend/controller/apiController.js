const db = require('../connection/connect')
const distance = require('../fakedata/distance')
const zone = require('../fakedata/zones')
const speed = require('../fakedata/speed')

exports.distanX = (req,res)=>{
  res.json(distance);
}

exports.zoneX = (req,res)=>{
  res.json(zone);
}

exports.speedX = (req,res)=>{
  res.json(speed);
}
