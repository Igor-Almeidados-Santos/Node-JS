require('./global');//Para adicionar efetivamente o novo elemento no escopo global deve fazer o require do arquivo e a partir daqui todos os arquivos já têm acesso ao novo elemento sem precisar fazer um novo require.

console.log(MinhaApp.saudacao());//Chamando um método do novo objeto adicionado ao global.

MinhaApp.nome = 'oi2';//Neste caso irá mudar o nome do objeto se ele não estiver com o Object.freeze setado. Cuidado! um objeto global não deve ter atributos que podem ser modificados em qualquer lugar.
console.log(MinhaApp.nome);