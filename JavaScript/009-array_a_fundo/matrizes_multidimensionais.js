const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.table(arr);
/*
┌─────────┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │
├─────────┼───┼───┼───┤
│ 0       │ 1 │ 2 │ 3 │
│ 1       │ 4 │ 5 │ 6 │
│ 2       │ 7 │ 8 │ 9 │
└─────────┴───┴───┴───┘
*/

console.log(arr[0]); // [1, 2, 3]

console.log(arr[1][1]); // 5

const arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ],
];

console.table(arr2);
/*
┌─────────┬─────────────┬─────────────┬─────────────┐
│ (index) │ 0           │ 1           │ 2           │
├─────────┼─────────────┼─────────────┼─────────────┤
│ 0       │ 1           │ 2           │ 3           │
│ 1       │ 4           │ 5           │ 6           │
│ 2       │ 7           │ 8           │ 9           │
│ 3       │ [ 1, 2, 3 ] │ [ 4, 5, 6 ] │ [ 7, 8, 9 ] │
└─────────┴─────────────┴─────────────┴─────────────┘
*/
console.log(arr2[3][0]); // [1, 2, 3]

console.log(arr2[3][0][1]); // 2