//Acessando modulo fora da pasta atual.

const moduloA = require('../../../Sistemas-de-Modulos/usando-sistema-de-modulos/moduloA');// Respeitar as letras maiusculas e minusculas.

console.log(moduloA.ola);

//O node possui modulos já instalados com ele o acesso a esses modulos core é da mesma forma.

//modulo core 'http
const http = require('http');
http.createServer((req, res)=> {
    res.write("Bom dia!")
    res.end()
}).listen(8080);