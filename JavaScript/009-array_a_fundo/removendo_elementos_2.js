let arr = [
    { nome: "fernando", tel: "(99) 99999 9999" },
    { nome: "ana", tel: "(11) 88888 7777" },
    { nome: "joao", tel: "(35) 96420-1234" },
    { nome: "pedro", tel: "(99) 99999 9999" },
    { nome: "jorge", tel: "(99) 99999 9999" },
];

console.table(arr);
/*
┌─────────┬────────────┬───────────────────┐
│ (index) │ nome       │ tel               │
├─────────┼────────────┼───────────────────┤
│ 0       │ 'fernando' │ '(99) 99999 9999' │
│ 1       │ 'ana'      │ '(11) 88888 7777' │
│ 2       │ 'joao'     │ '(35) 96420-1234' │
│ 3       │ 'pedro'    │ '(99) 99999 9999' │
│ 4       │ 'jorge'    │ '(99) 99999 9999' │
└─────────┴────────────┴───────────────────┘
*/

const Arr2 = arr.slice(1, 4);
console.table(Arr2);
/* 
┌─────────┬─────────┬───────────────────┐
│ (index) │ nome    │ tel               │
├─────────┼─────────┼───────────────────┤
│ 0       │ 'ana'   │ '(11) 88888 7777' │
│ 1       │ 'joao'  │ '(35) 96420-1234' │
│ 2       │ 'pedro' │ '(99) 99999 9999' │
└─────────┴─────────┴───────────────────┘
*/
const Arr3 = arr.splice(1, 1); //remove o elemento da posição 1 e remove um elemento a partir daí
console.log("\n\nArray com o elemento de posição 1 removido");
console.table(Arr3);


