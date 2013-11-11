//index.js
var servidor = require('./servidor'); //Importamos el módulo servidor creado
var router = require('./router'); //Importamos el módulo router
var manejadores = require('./manejador'); //Importamos el módulo manejador
var manejador = {}
manejador["/"] = manejadores.funcion_1;
manejador["/home"] = manejadores.funcion_1;
manejador["/contacto"] = manejadores.funcion_2;
servidor.inicializar(router.route, manejador); //Llama al método inicializar del objeto servidor