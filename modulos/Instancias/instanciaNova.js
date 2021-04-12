//Como o valor retornado deste módulo é um função factory será atribuido um objeto independente para cada const/var que acessar este módulo.
module.exports = ()=>{
    return{
        valor: 1,
        inc(){
            this.valor++;
        }
    };
};