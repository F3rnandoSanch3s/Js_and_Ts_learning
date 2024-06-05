const myArray = [1, 2, 3, 4, 5, 6];

for(let i = 0; i < 10; i++){
    console.log(i);
}
console.log("------------------------------");

for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}

console.log("------------------------------");

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

//for (let i = 0; i < myArrayObj.length; i++) {
//    console.log(myArrayObj[i].nome, myArrayObj[i].sobrenome);        
//};
/*
Fernando sanches
Ana catarina
pedro silveira
Sandro rodrigues
Fernanda smith
*/

for (let item of myArrayObj){
    console.log(item.nome, item.sobrenome, item.idade);
}
/*
Fernando sanches 28
Ana catarina 17
pedro silveira 76
Sandro rodrigues 20
Fernanda smith 29
*/
