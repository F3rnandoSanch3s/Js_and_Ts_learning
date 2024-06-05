const Tenis = {
    tipo:"tenis de corrida",
    cadarço:"G",
    estoque:false,
    tamanho: {
        palmilha: 39,
        tenis: 40,
        caixa: {
            largura: 34,
            comprimento: 40,
            profundidade: 15,
        },
    },
    ///marca:["nike", "adidas", "puma"],
    marca: [
        {
            nome:"nike"
        },
        {
            nome: "adidas",
        },
        {
            nome: "puma",
        }
    ],
    getMarcaArrayValores: function(param){
        return this.marcaArrayObj[param].nome
    },
    getMarcaArrayObj: function(param){
        return this.marcaArrayObj[param].nome
    },
};

console.log(Tenis);
console.log(Tenis.tamanho);
console.log(Tenis.tipo);