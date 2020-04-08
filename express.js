var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send("node est facile <a href='demo'> voir commment</a>");
})
app.get('/demo', function (req, res) {
    res.send('express facilite le multi-routage');
 })
var server = app.listen(8000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("fait sous l'adresse http://%s:%s", host, port)
})