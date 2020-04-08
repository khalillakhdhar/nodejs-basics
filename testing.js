var express = require('express');
var app = express();
const path = require('path');

app.use(express.static('public'));
app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname+'/index.html'));
  });
app.get('/testget', function (req, res) {
   // Prepare output in JSON format
   response = {
      nom:req.query.nom,
      prenom:req.query.prenom
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("exécution en cours sous http://%s:%s", host, port)
})