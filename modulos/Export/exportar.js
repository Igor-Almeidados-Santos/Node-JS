//Module.exports é um objeto vazio
console.log(module.exports);

//This e exports são extritamente iguais ao module.exports.
console.log(module.exports === this);
console.log(module.exports === exports);

//formas de se atribuir um novo elemento ao modulo.

this.a = 1; //Cria uma chave a dentro do objeto do módulo com o valor 1.
console.log(this.a);

exports.b = 2; //Cria também uma chave e valor dentro do objeto do modulo.
console.log(exports.b);

module.exports.c = 3; //Cria também um par chave/valor no objeto do módulo.
console.log(module.exports.c);

exports = null; //Mesmo atribuindo outro valor direto no exports a referencia module.exports não muda o endeço que ele aponta ou seja o objeto original que contém as propriedades a,b e c.
console.log(module.exports);

exports = { // O mesmo caso de cima acontece se atribuir um novo objeto a exports, module.exports não mudará a referência
    nome: 'teste'
};
console.log(module.exports);

//Forma de mudar a referência do module.exports

module.exports = {publico: true}; //Para mudar a referência deve colocar o caminho completo ou seja module.exports e atribuir o novo valor.
console.log(module.exports);
