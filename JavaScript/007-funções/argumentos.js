function soma (num1, num2){
    if(typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2;
    }
    return  'Os valores devem ser do tipo number';
}

console.log(soma(1, 3));//4

console.log("**************************************");

function subtracao(){
    return arguments;
}

console.log(subtracao());//[Arguments] {}

console.log(subtracao(1, 2, "abc"));//[Arguments] { '0': 1, '1': 2, '2': 'abc' }









