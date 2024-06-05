myArrayObj = [
    {
        nome: "Fernando",
        sobrenome: "sanches",
        idade: 28
    },
    {
        nome: "Ana",
        sobrenome: "catarina",
        idade: 17
    },    {
        nome: "pedro",
        sobrenome: "silveira",
        idade: 76
    },
    {
        nome: "Sandro",
        sobrenome: "rodrigues",
        idade: 20
    },
    {
        nome: "Fernanda",
        sobrenome: "smith",
        idade: 29
    },
];

for(let item of  myArrayObj){
    if(item.idade >= 18){
        console.log("ja pode ser preso!!! HAHAHAHHAHA");
    } else {
        console.log("seus pais ja assinaram?");
    }
};
/**
 ja pode ser preso!!! HAHAHAHHAHA
seus pais ja assinaram?
ja pode ser preso!!! HAHAHAHHAHA
ja pode ser preso!!! HAHAHAHHAHA
ja pode ser preso!!! HAHAHAHHAHA
 */