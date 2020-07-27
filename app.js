

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const config = require('./config.json');


const hostname = config.ip;
const port = config.port;



router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/pages/index/index.html'));
  //__dirname : It will resolve to your project folder.
});


//add the router
app.use('/', router);
app.listen(port, hostname);

console.log(`Running... http://${hostname}:${port}/`);