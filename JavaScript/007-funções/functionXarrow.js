function nomeFunc() {
    return "fernando sanches";//fernando sanches
}
console.log(nomeFunc());

const nomeFuncArrow = () => {
    return "fernando sanches";//fernando sanches
};
console.log(nomeFuncArrow());

const nomeFuncArrowReturn = () => "fernando sanches";
console.log(nomeFuncArrowReturn());//fernando sanches

const nomeFunctionarrowHosting = () => {
    return "fernando sanches";
};
console.log(nomeFunctionarrowHosting());//fernando sanches

function nomeFuncArgument() {
    return arguments; //retorna um array com todos os argument
}
console.log(nomeFuncArgument("Fernando sanches"));//[Arguments] { '0': 'Fernando sanches' }

const nomeFuncArrowParams = (param) => param;
console.log(typeof (nomeFuncArrowParams));//function

function novaFunc(){
    return 123;
};





