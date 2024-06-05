const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [
        {nome: "Nike"},
        {nome:"Adidas"},
        {nome: "Puma"}
    ],
    secreto: 123456,
    n: 7,
    link: { a: "a", b: { c: "C" } },
};
/*
const {tamanho, estoque, marcas = "isso não pode ser revelado!"} = Tenis; //se não tiver marca  vai ser isso não pode ser revelado
console.log(tamanho, estoque, marcas);//45 true [ { nome: 'Nike' }, { nome: 'Adidas' }, { nome: 'Puma' } ]

const {secreto : randomNumber, n: avaliacoes } = Tenis;
//console.log(secreto);//erro
console.log(randomNumber);
*/

const { link } = Tenis;
console.log(link);//{ a: 'a', b: { c: 'C' } }

const { 
    link: {a}
} = Tenis;
console.log(a);//a

const { 
    link: {b}
} = Tenis;
console.log(b);//{ c: 'C' }

const { 
    link: {
        b:{c}
    }
} = Tenis;
/*
console.log(c);//C

console.log(Tenis.link.a)//a
console.log(Tenis.link.a, Tenis.link.b.c);// a C
*/

console.log(Tenis.hasOwnProperty("tamanho"));//true
console.log(Tenis.hasOwnProperty("teste"));//false

console.log("tamanho" in Tenis);//true






