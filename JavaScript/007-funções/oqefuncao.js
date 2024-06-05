
//função é um conjunto de instruções que executa uma
//tarefa ou calcula um valor

//1- functions declaration
function isValidDeclaration(){
    const soma = 1 + 2;
    return soma;
}
console.log(isValid());//3

//2 - functions expression
const isValidExpression = function () {
    return false;
}
console.log(isValidExpression());

//3 - arrow function
const isValidArrow = () => {
    const multiplicacao = 2 * 2;
    return multiplicacao;
};

console.log(isValidArrow());//4
