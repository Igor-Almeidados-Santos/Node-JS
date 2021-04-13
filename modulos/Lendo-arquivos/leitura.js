const fs = require('fs');//Para ler o arquivo usa-se o file sistem que é um modulo que já vem pré instalado no node.

const caminho = __dirname + '/arquivo.json';

//Lendo arquivo de forma sincrona. 
const conteudo = fs.readFileSync(caminho, 'utf-8');//Esta forma não é muito recomendada caso for fazer uma requisição de um arquivo muito pesado pois ele irá travar o event looping até ele ler todo o arquivo.
console.log(conteudo);


//Lendo arquivo de forma assincrona.
fs.readFile(caminho, 'utf-8', (err, conteudo)=>{
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}:${config.db.port}`);
});


//Forma mais simples de ler um arquivo JSON.
const config = require('./arquivo.json');//Como o arquivo é json colocando apenas este caminho já converte o arquivo para um objeto sem precisar usar o readFile/readFileSync.
console.log(config.db);


//Lendo um diretório no projeto.
fs.readdir(__dirname, (err, arquivos)=>{//Mostra todos os arquivos presentes no diretório passado na primeira posição.
    console.log('Conteúdo da pasta...');
    console.log(arquivos);
});