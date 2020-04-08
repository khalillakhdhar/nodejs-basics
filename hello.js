var http=require("http") //importer le protocole HTTP
http.createServer (function(req , res)
{
res.writeHead (200, {'Content-Type':'text /plain'});
res.end ('Hello Home!');
}).listen(8081)