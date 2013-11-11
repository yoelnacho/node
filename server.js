var http = require("http");

console.log("Servidor ON");

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type":"text/html"});
    response.write("Hola Mundo");
    response.end()
}).listen(3000);