//Pegando dados de um servidor remoto através de uma url e retornando um funcionario com sexo feminino, nacionalidade chinesa e com o maior salário entre os outros.

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';//Atribuindo os dados salvos na url a uma constante url.

const axios = require('axios');//Fazendo o import do axios no modulo atual.

const chinesesF = funcionario => {
    return funcionario.genero === 'F' && funcionario.pais === 'China';   
};

const maiorSalario = (e, a) =>{
    return e.salario > a.salario ? e : a;
};

axios.get(url).then(response =>{
    const funcionarios = response.data;
    const funcionarias = funcionarios.filter(chinesesF);

    let funcionaria = funcionarias.reduce(maiorSalario);

    console.log(funcionaria);
});//Filtrando os dados recebidos do banco de dados.