let Tenis = {
    tamanho: 45,
    estoque: true,
};
console.log(Tenis);//{ tamanho: 45, estoque: true }

Tenis.tamanho = 32;//mudou o tamanho do tenis
console.log(Tenis);//{ tamanho: 32, estoque: true }

Tenis["preco"] = "R$ 42"; //adicionou preco no objeto tenis
console.log(Tenis);//{ tamanho: 32, estoque: true, preco: 'R$ 42' }

delete Tenis.estoque;//deletou a propriedade estoque do obejto Tenis
console.log(Tenis);//{ tamanho: 32, preco: 'R$ 42' }