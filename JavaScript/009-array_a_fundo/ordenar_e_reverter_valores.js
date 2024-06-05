const stringArray = ["A", "C", "D", "W", "L", "B"];

console.log(stringArray.sort());//[ 'A', 'B', 'C', 'D', 'L', 'W' ]
console.log(stringArray.reverse());//[ 'W', 'L', 'D', 'C', 'B', 'A' ]

const numberArray = [10, 20, 30, 40, 50, 1000, 1, 55, 15];

console.log(numberArray.sort((a, b) => a - b));//[1, 10, 15, 20, 30, 40, 50, 55, 1000]

console.log(numberArray.sort((a, b) => a - b).reverse());//[1000, 55, 50, 40, 30, 20, 15, 10, 1]

const objArray = [
    {
        nome: "Fernando sanches",
    },
    {
        nome: "Eduarda  silva",
    },
    {
        nome:  "Joao da Silva",
    },
    {
        nome:  "Maria paula",
    },
    {
        nome: "Rafael ferreira"
    },
    {
        nome: "Paulo rodrigues",
    },
];

console.log(objArray.sort((a,b)=> a.nome.localeCompare(b.nome)));
/*
[
  { nome: 'Eduarda  silva' },
  { nome: 'Fernando sanches' },
  { nome: 'Joao da Silva' },
  { nome: 'Maria paula' },
  { nome: 'Paulo rodrigues' },
  { nome: 'Rafael ferreira' }
]
*/















































