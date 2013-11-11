var express = require('express');
var app = express();
console.log("Servidor ON");

//cada vez que nuestra app esté escuchando 
//en el puerto 3000, muestra el mensaje.
app.get('/', function(req, res){
  res.send("Hello Wordl desde express"); 
});

app.listen(3000);