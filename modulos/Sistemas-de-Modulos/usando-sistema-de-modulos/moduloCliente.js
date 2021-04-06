//Acessando os modulos A e B em um terceiro modulo.

const moduloA = require('./moduloA'); //Usa-se o método "require" para acessar outro módulo passando seu caminho relativo.

const moduloB = require('./moduloB');

console.log(moduloA.ola);
console.log(moduloB.boaNoite());