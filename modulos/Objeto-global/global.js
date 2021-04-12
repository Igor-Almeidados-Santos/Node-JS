console.log(global);

//Cuidado! Não é muito indicado que se use o objeto global pois a chance de acontecer problemas é maior. O padrão é utilizar o sistema de módulos do Node.

globalThis.MinhaApp = Object.freeze({//Atribui um novo objeto no escopo global
    saudacao(){
        return 'Estou em todos os lugares!';
    },

    nome: 'Pedro'
});//Um objeto global não pode ser passivo a modificações nos atributos então usa-se o "Object.freeze" para não permitir essas modificações.