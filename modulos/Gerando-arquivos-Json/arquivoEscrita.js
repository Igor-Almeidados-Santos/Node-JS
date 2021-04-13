const fs = require('fs');

const produto = {
    modelo: 'Galaxy s30',
    marca: 'Samsung',
    preco: 5214.58,
    desconto: 0.15
};

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo Salvo');
}); //Esta função Transforma o objeto em um arquivo textual e o salva no diretório atual.