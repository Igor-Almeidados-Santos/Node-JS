//O padrão chain of responsability ou middleware é um padrão que permite o reuso de funções separando os passos e conectando eles através de uma outra função que dispara a proxima necessaria no ciclo.

const passo1 = (ctx, next) =>{
    ctx.valor1 ='mid1';
    next();
};

const passo2 = (ctx, next) =>{
    ctx.valor2 ='mid2';
    next();
};

const passo3 = ctx => ctx.valor3 ='mid3';
