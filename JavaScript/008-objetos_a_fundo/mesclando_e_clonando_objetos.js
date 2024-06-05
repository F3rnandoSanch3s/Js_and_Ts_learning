let Tenis = {
    tamanho: 44,
    estoque: true,
};

let link = { link: {a: "a", b: {c: 'c'}} };

let clone1 = Tenis;
console.log(1, clone1);//{ tamanho: 44, estoque: true }
console.log(2, Tenis);

let mesclar1 = Object.assign(Tenis, link);
console.log(3, mesclar1);//{ tamanho: 44, estoque: true, link: { a: 'a', b: { c: 'c' } } }

let mesclar2 = {...Tenis, ...link};
console.log(4, mesclar2);//{ tamanho: 44, estoque: true, link: { a: 'a', b: { c: 'c' } } }








