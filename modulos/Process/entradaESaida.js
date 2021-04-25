//Através do objeto Process consegue-se ler e imprimir dados da entrada(teclado) e saida(tela) padrão do computador.

const anonimous = process.argv.indexOf('-a') !== -1;//Pega parâmetros passados através do terminal por exemplo a flag -a.
// console.log(anonimous);

if(anonimous) {
    process.stdout.write('Fala Anônimous!\n');//Escreve uma mensagem na saída padrão.
    process.exit();//Finaliza a aplicação.
}else {
    process.stdout.write('Informe o seu nome: ');
    process.stdin.on('data', data => {//Pega os dados digitados e coloca em uma constante.
        const nome = data.toString().replace('\n', ' ');//Transforma o dado em uma string e troca o \n por um espaço em branco.

        process.stdout.write(`Fala ${nome}!\n`);
        process.exit();
    });
};
