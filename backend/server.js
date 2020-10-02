const cors = require('cors');
const express = require('express');
const teamRoute = require('./rotues/team')
// const db = require('./connection/connect');


const app  = express();
app.use(cors());
app.options('*',cors());

app.use('/team',teamRoute);


app.listen('3000',()=>{
  console.log('Server Runnig');
})
