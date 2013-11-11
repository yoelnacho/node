var express = require('express');
var app = express();

app.configure(function() {
        app.set('view options', {
        layout:false
    });
        app.use(express.static(__dirname));
});

app.get('/', function(req, res){
    res.render('index.jade'); 
});

app.listen(3030, function() {
    console.log("server OK");
});