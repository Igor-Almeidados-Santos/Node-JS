//O node mantém as instâncias sendo unicas ou seja mesmo se chamar este objeto com valor atribuído a const/var diferentes o cache irá acessar o mesmo objeto em todas.
module.exports = {
    valor: 1,
    inc(){
        this.valor++;
    }
};