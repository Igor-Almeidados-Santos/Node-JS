const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

const contadorC = require('./instanciaNova')();// Como o valor retornado pelo arquivo instancia nova é uma função coloca-se os parênteses após o require para chamar a função e retornar o objeto criado por ela.
const contadorD = require('./instanciaNova')();


//O incremento do contadorA irá influenciar no valor do contadorB também pois os dois acessam o mesmo objeto no module.exports.
contadorA.inc();
contadorA.inc();
console.log(contadorA.valor, contadorB.valor);

//O incremento do contadorC não irá influenciar no valor de contadorD pois o module.exports retorna uma function factory que cria um objeto independente para cada contador.
contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor);