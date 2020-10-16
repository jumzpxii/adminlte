const db = require("../connection/connect");
const moment = require('moment');

const zoneres = {
  "options":{
     "title":"Zone map"
  },
  "data":{
     "url":"\/sensmapserver\/svgs\/uploads\/plans\/PeZ2DDFpLQzAcHVp0gvn6rKvjL0GRMBDF9A8Tnad.jpeg",
     "scale":"33.759895663614",
     "zeroaxis":null,
     "zones":[
        {
           "name":"Defensive 3 Pts",
           "type":null,
           "scale":"33.7599",
           "polygons":[
              [
                 "0.8907790844799501",
                 "-14.812623562188001"
              ],
              [
                 "14.796327723175",
                 "-14.835915938466"
              ],
              [
                 "14.793416176139997",
                 "-0.7702322128521891"
              ],
              [
                 "0.8907790844799501",
                 "-0.7702322128521891"
              ],
              [
                 "0.8907790844799501",
                 "-1.6145808529738992"
              ],
              [
                 "3.9013187185691995",
                 "-1.6145808529738992"
              ],
              [
                 "4.774782829039901",
                 "-1.8358584276265997"
              ],
              [
                 "5.5143157759052",
                 "-2.144482413326201"
              ],
              [
                 "6.1490330295139",
                 "-2.4822218693747997"
              ],
              [
                 "6.8361581297509",
                 "-2.9713617712385005"
              ],
              [
                 "7.4359368189409",
                 "-3.5070864256606016"
              ],
              [
                 "8.0182462259213",
                 "-4.170919149618399"
              ],
              [
                 "8.5947325388321",
                 "-5.1055257478220994"
              ],
              [
                 "9.0256414999976",
                 "-6.1886212448058"
              ],
              [
                 "9.2119805102313",
                 "-7.4347633757441"
              ],
              [
                 "9.1770419458126",
                 "-8.5295050608674"
              ],
              [
                 "8.923737353776",
                 "-9.6824776866889"
              ],
              [
                 "8.4957399396454",
                 "-10.660757490416"
              ],
              [
                 "7.8551995919668",
                 "-11.627391106003"
              ],
              [
                 "7.302005655335301",
                 "-12.224258248159002"
              ],
              [
                 "6.690580778005799",
                 "-12.762894449615"
              ],
              [
                 "5.7297702564879005",
                 "-13.345203856597"
              ],
              [
                 "4.8999793515407",
                 "-13.709147235958998"
              ],
              [
                 "4.2594390038622",
                 "-13.912955528402001"
              ],
              [
                 "3.9216995478135",
                 "-13.991567298345"
              ],
              [
                 "0.8878675374450302",
                 "-13.99447884538"
              ],
              [
                 "0.8907790844799501",
                 "-14.81262356218800"
              ]
           ],
           "tags":[
              {
                 "count":27.67199969291687,
                 "zone":"Defensive 3 Pts",
                 "tag":"Imu1",
                 "unit":"s"
              },
              {
                 "count":7.931999683380127,
                 "zone":"Defensive 3 Pts",
                 "tag":"Imu2",
                 "unit":"s"
              }
           ]
        },
        {
           "name":"Defensive 2 Pts",
           "type":null,
           "scale":"33.7599",
           "polygons":[
              [
                 "0.8849559904101301",
                 "-13.99447884538"
              ],
              [
                 "3.9158764537437",
                 "-13.991567298345"
              ],
              [
                 "4.6437632124693",
                 "-13.796493647005999"
              ],
              [
                 "5.336711406776101",
                 "-13.528631319796"
              ],
              [
                 "5.8258513086397",
                 "-13.295707557002999"
              ],
              [
                 "6.3615759630618",
                 "-12.969614289094"
              ],
              [
                 "6.6410844784124",
                 "-12.78327527886"
              ],
              [
                 "7.130224380276099",
                 "-12.387304882114"
              ],
              [
                 "7.5436640592322",
                 "-11.973865203157"
              ],
              [
                 "7.878491968246",
                 "-11.580806353446"
              ],
              [
                 "8.2104083302249",
                 "-11.126605016"
              ],
              [
                 "8.5015630337151",
                 "-10.649111302276"
              ],
              [
                 "8.743221437612",
                 "-10.11047510082"
              ],
              [
                 "8.9353835419157",
                 "-9.6271582930257"
              ],
              [
                 "9.0343761411023",
                 "-9.1962493318601"
              ],
              [
                 "9.1217225521494",
                 "-8.7944558410436"
              ],
              [
                 "9.1741303987776",
                 "-8.5673551723212"
              ],
              [
                 "9.1915996809871",
                 "-8.1073307408065"
              ],
              [
                 "9.2178036043012",
                 "-7.379443982081"
              ],
              [
                 "9.130457193254",
                 "-6.7971345751005"
              ],
              [
                 "9.0372876881372",
                 "-6.3138177673066"
              ],
              [
                 "8.8800641482525",
                 "-5.824677865443001"
              ],
              [
                 "8.6384057443556",
                 "-5.1928721588691005"
              ],
              [
                 "8.2890201001673",
                 "-4.572712640434901"
              ],
              [
                 "7.799880198303599",
                 "-3.9088799164771"
              ],
              [
                 "7.2758017320212",
                 "-3.3498628857758987"
              ],
              [
                 "6.507153314806901",
                 "-2.7209687262369"
              ],
              [
                 "5.7559741798021",
                 "-2.266767388792099"
              ],
              [
                 "4.952387198169",
                 "-1.9086471034991006"
              ],
              [
                 "4.1662694987452",
                 "-1.6728117936720004"
              ],
              [
                 "3.8867609833947",
                 "-1.6116693059389997"
              ],
              [
                 "0.89077908447993",
                 "-1.6204039470437008"
              ],
              [
                 "0.8849559904101301",
                 "-13.9944788453"
              ]
           ],
           "tags":[
              {
                 "count":55.01200008392334,
                 "zone":"Defensive 2 Pts",
                 "tag":"Imu1",
                 "unit":"s"
              },
              {
                 "count":171.87600016593933,
                 "zone":"Defensive 2 Pts",
                 "tag":"Imu2",
                 "unit":"s"
              }
           ]
        },
        {
           "name":"Offensive 3 Pts",
           "type":null,
           "scale":"33.7599",
           "polygons":[
              [
                 "14.802150817244",
                 "-0.7789668539569011"
              ],
              [
                 "28.780488131810998",
                 "-0.7789668539569011"
              ],
              [
                 "28.780488131810998",
                 "-1.6233154940787007"
              ],
              [
                 "25.772860044757003",
                 "-1.6174924000088013"
              ],
              [
                 "24.785845599925",
                 "-1.8882662742547012"
              ],
              [
                 "23.798831155093005",
                 "-2.351202252804301"
              ],
              [
                 "23.012713455669005",
                 "-2.8490767957726"
              ],
              [
                 "22.060637575256",
                 "-3.7225409062432995"
              ],
              [
                 "21.361866286879",
                 "-4.648412863342399"
              ],
              [
                 "20.951338154959",
                 "-5.4782037682896"
              ],
              [
                 "20.732972127341",
                 "-6.1041863807937"
              ],
              [
                 "20.529163834897",
                 "-7.064996902311399"
              ],
              [
                 "20.485490629374",
                 "-8.0403651590038"
              ],
              [
                 "20.587394775596",
                 "-8.9720602101726"
              ],
              [
                 "20.878549479086",
                 "-9.9270476376206"
              ],
              [
                 "21.297812252112",
                 "-10.8179810303"
              ],
              [
                 "21.874298565022",
                 "-11.621568011934"
              ],
              [
                 "22.450784877933",
                 "-12.250462171472"
              ],
              [
                 "23.14955616631",
                 "-12.861887048802998"
              ],
              [
                 "24.092897405618",
                 "-13.403434797294"
              ],
              [
                 "24.896484387251",
                 "-13.735351159273"
              ],
              [
                 "25.769948497721998",
                 "-13.979921110204998"
              ],
              [
                 "28.765930396637",
                 "-13.9711864691"
              ],
              [
                 "28.765930396637",
                 "-14.821358203291"
              ],
              [
                 "14.796327723175",
                 "-14.818446656256"
              ],
              [
                 "14.802150817244",
                 "-0.778966853956901"
              ]
           ],
           "tags":[
              {
                 "count":17.144999742507935,
                 "zone":"Offensive 3 Pts",
                 "tag":"Imu1",
                 "unit":"s"
              },
              {
                 "count":6.5199995040893555,
                 "zone":"Offensive 3 Pts",
                 "tag":"Imu2",
                 "unit":"s"
              }
           ]
        },
        {
           "name":"Offensive 2 Pts",
           "type":null,
           "scale":"33.7599",
           "polygons":[
              [
                 "28.774665037741",
                 "-13.979921110204998"
              ],
              [
                 "25.781594685862",
                 "-13.991567298345"
              ],
              [
                 "24.780022505855",
                 "-13.694589500784"
              ],
              [
                 "24.092897405618",
                 "-13.403434797294"
              ],
              [
                 "23.312602800264",
                 "-12.949233459849"
              ],
              [
                 "22.733204940319",
                 "-12.518324498684002"
              ],
              [
                 "22.191657191827",
                 "-11.994246032401"
              ],
              [
                 "21.763659777696",
                 "-11.496371489433"
              ],
              [
                 "21.396804851298",
                 "-10.954823740941"
              ],
              [
                 "21.056153848215",
                 "-10.355045051751"
              ],
              [
                 "20.811583897283",
                 "-9.7203277981425"
              ],
              [
                 "20.631067981119",
                 "-9.0681412623244"
              ],
              [
                 "20.532075381932",
                 "-8.4858318553439"
              ],
              [
                 "20.502959911583",
                 "-7.967576483131201"
              ],
              [
                 "20.508783005653",
                 "-7.405647905395101"
              ],
              [
                 "20.543721570072",
                 "-7.0038544145785"
              ],
              [
                 "20.61359869891",
                 "-6.602060923762"
              ],
              [
                 "20.75044140955",
                 "-6.031397704921001"
              ],
              [
                 "20.925134231644",
                 "-5.5597270852668"
              ],
              [
                 "21.128942524088",
                 "-5.111348841891801"
              ],
              [
                 "21.388070210194",
                 "-4.6076512048538"
              ],
              [
                 "21.754925136592",
                 "-4.0835727385713"
              ],
              [
                 "22.217861115141",
                 "-3.5594942722889007"
              ],
              [
                 "22.811816710261",
                 "-3.0179465237969008"
              ],
              [
                 "23.213610201078",
                 "-2.7034994440275004"
              ],
              [
                 "23.612492144859004",
                 "-2.438548663851299"
              ],
              [
                 "24.154039893351005",
                 "-2.1590401485006008"
              ],
              [
                 "24.599506589690996",
                 "-1.9668780441970986"
              ],
              [
                 "25.088646491555004",
                 "-1.8009198632077001"
              ],
              [
                 "25.595255675627996",
                 "-1.6611656055322992"
              ],
              [
                 "25.781594685862",
                 "-1.6116693059389997"
              ],
              [
                 "28.768841943671",
                 "-1.6233154940787007"
              ],
              [
                 "28.774665037741",
                 "-13.97992111020499"
              ]
           ],
           "tags":[
              {
                 "count":177.2039999961853,
                 "zone":"Offensive 2 Pts",
                 "tag":"Imu1",
                 "unit":"s"
              },
              {
                 "count":144.88699960708618,
                 "zone":"Offensive 2 Pts",
                 "tag":"Imu2",
                 "unit":"s"
              }
           ]
        }
     ],
     "originX":"50.036536248561",
     "originY":"545.18843498274"
  },
  "type":"zoneMap",
  "id":0
}
exports.insertTeam = (req, res, next) => {
  // const body = req.body;
  // console.log(body.startDate);
  // const sdate = req.body.startDate
  let format = req.body.startDate
  console.log('format=>',format)
  let sdate = moment(format).format('YYYY-MM-DD HH:mm:ss')
  console.log('format=>',sdate)

  return res.json(sdate);
  next();
};

exports.searchApi = (req, res, next) => {
  const body = req.body;
  return res.json(body);
  // console.log(body);
  next();
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
