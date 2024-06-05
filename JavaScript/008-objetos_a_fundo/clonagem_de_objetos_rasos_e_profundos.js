let Tenis = {
    tamanho: 44,
    estoque: true,
};

let link = { link: {a: "a", b: {c: 'c'}} };
/*
let clone1 = Tenis;
console.log(1, clone1);//1 { tamanho: 44, estoque: true }
console.log(2, Tenis);//2 { tamanho: 44, estoque: true }

let mesclar1 = Object.assign(Tenis, link);
let mesclar2 = {...Tenis, ...link};

clone1.estoque = false;
mesclar1.link.a = "ABC";

console.log(3, clone1);//3 { tamanho: 44, estoque: false, link: { a: 'ABC', b: { c: 'c' } } }
console.log(4, Tenis);//4 { tamanho: 44, estoque: false, link: { a: 'ABC', b: { c: 'c' } } }
console.log(5, mesclar1);//5 { tamanho: 44, estoque: false, link: { a: 'ABC', b: { c: 'c' } } }
console.log(6, mesclar2);//6 { tamanho: 44, estoque: true, link: { a: 'ABC', b: { c: 'c' } } }
*/

let clone1 = Tenis;
console.log(typeof clone1);//object

let clone2 = JSON.stringify(Tenis);//converteu para string
console.log(typeof clone2);//string

