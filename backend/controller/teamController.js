const db = require("../connection/connect");

const data = {
  options: {
    title: "Zone map",
  },
  data: {
    url:
      "/sensmapserver/svgs/uploads/plans/PeZ2DDFpLQzAcHVp0gvn6rKvjL0GRMBDF9A8Tnad.jpeg",
    scale: "33.759895663614",
    zeroaxis: null,
    zones: [
      {
        name: "Offensive 3 Pts",
        type: null,
        scale: "33.7599",
        polygons: [
          ["14.802150817244", "-0.7789668539569011"],
          ["28.780488131810998", "-0.7789668539569011"],
          ["28.780488131810998", "-1.6233154940787007"],
          ["25.772860044757003", "-1.6174924000088013"],
          ["24.785845599925", "-1.8882662742547012"],
          ["23.798831155093005", "-2.351202252804301"],
          ["23.012713455669005", "-2.8490767957726"],
          ["22.060637575256", "-3.7225409062432995"],
          ["21.361866286879", "-4.648412863342399"],
          ["20.951338154959", "-5.4782037682896"],
          ["20.732972127341", "-6.1041863807937"],
          ["20.529163834897", "-7.064996902311399"],
          ["20.485490629374", "-8.0403651590038"],
          ["20.587394775596", "-8.9720602101726"],
          ["20.878549479086", "-9.9270476376206"],
          ["21.297812252112", "-10.8179810303"],
          ["21.874298565022", "-11.621568011934"],
          ["22.450784877933", "-12.250462171472"],
          ["23.14955616631", "-12.861887048802998"],
          ["24.092897405618", "-13.403434797294"],
          ["24.896484387251", "-13.735351159273"],
          ["25.769948497721998", "-13.979921110204998"],
          ["28.765930396637", "-13.9711864691"],
          ["28.765930396637", "-14.821358203291"],
          ["14.796327723175", "-14.818446656256"],
          ["14.802150817244", "-0.778966853956901"],
        ],
        tags: [
          {
            count: 80.68399953842163,
            zone: "Offensive 3 Pts",
            tag: "Imu1",
            unit: "s",
          },
          {
            count: 116.68399953842163,
            zone: "Offensive 3 Pts",
            tag: "Imu2",
            unit: "s",
          },
          {
            count: 96.68399953842163,
            zone: "Offensive 3 Pts",
            tag: "Imu3",
            unit: "s",
          },
        ],
      },
    ],
    originX: "50.036536248561",
    originY: "545.18843498274",
  },
  type: "zoneMap",
  id: 0,
};
exports.insertTeam = (req, res, next) => {
  const body = req.body;
  return res.json(data);
  // console.log(body);
  next();
};

exports.getIndex = (req, res) => {
  return res.send("xxxx");
};

exports.tags = (req,res) => {
  return res.json(data)
}

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
