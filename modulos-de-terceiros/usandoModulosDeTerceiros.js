//Procura dentro da pasta node_modules/lodash o arquivo index.js que é o arquivo de import inicial para os modulos da biblioteca lodash.

const _ = require('lodash');//por padrão usa-se "_" para se referir a uma biblioteca.

setInterval(()=> console.log(_.random(50, 100)), 2000);