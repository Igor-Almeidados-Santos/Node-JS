//O padrão chain of responsability ou middleware é um padrão que permite o reuso de funções separando os passos e conectando eles através de uma outra função que dispara a proxima necessaria no ciclo.


//Conjunto de passos que a função pode ou não utilizar.
const passo1 = (ctx, next) =>{
    ctx.valor1 ='mid1';
    next();
};

const passo2 = (ctx, next) =>{
    ctx.valor2 ='mid2';
    next();
};

const passo3 = ctx => ctx.valor3 ='mid3';


//Função que fica encarregada de executar os passos na ordem informada.
const exec = (ctx, ...middlewares) => {//Middlewares é um array com as funções/passos que serão executadas.
    const execPasso = indice => {
        middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execPasso (indice + 1));//Essa função execulta os passos em ordem, ela verifica primeiro se middlewares está setado, depois verifica se o indice passado é menor que o tamanho de middleware e por ultimo execulta a função que está na posição do indice informado passando como função next o proprio execpasso novamente agora com indice +1.
    };

    execPasso(0);
};

//Execussão dos passos
const ctx = {};

exec(ctx, passo1, passo2);//Executa cada passo na ordem informada.

console.log(ctx);
