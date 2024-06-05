
//            0  1  2  3    4        5          6 
const arr = ([1, 2, 3, 4, true, "fernando", "sanches"]);

console.table(arr);
/*
┌─────────┬────────────┐
│ (index) │ Values     │
├─────────┼────────────┤
│ 0       │ 1          │
│ 1       │ 2          │
│ 2       │ 3          │
│ 3       │ 4          │
│ 4       │ true       │
│ 5       │ 'fernando' │
│ 6       │ 'sanches'  │
└─────────┴────────────┘
*/

console.log(arr[4]); // Retorna o valor da posição [4] do array que é = true

console.log(arr.length);//Retorna a quantidade de elementos no Array que é = 7