
//let array: [string] = ["fernando sanches", "sandro"];
//console.log(array);//error

let array1: [string, string] = ["fernando sanches", "teste"];
console.log(array1);//[ 'fernando sanches', 'teste' ]

let array2: Array<string> = ["fernando sanches", "teste", "teste2"];
console.log(array2);//[ 'fernando sanches', 'teste', 'teste2' ]

let array3: Array<string | number | boolean> = [true, "fernando", 123, "sanches"];
console.log(array3);//[ true, 'fernando', 123, 'sanches' ]

let obj1: {nome: string, sobrenome: string} = {nome: "fernando", sobrenome: "sanches"};
console.log(obj1);//{ nome: 'fernando', sobrenome: 'sanches' }

