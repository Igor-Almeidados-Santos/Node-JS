//Exports retorna uma função que recebe os parâmetros.

module.exports = (...nomes) =>{
    return nomes.map(nome => `Boa semana ${nome}!`);
};