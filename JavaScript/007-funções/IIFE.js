// IIFE = immediately invoked function expression
// IIFE = expressão de função invocada imediatamente

(function(){
    console.log("fernando sanches");
})();//fernando sanches


(function(num1, num2){
    const calc = num1 + num2;
    console.log(calc);
})(1, 2);//3


(() => {
    console.log(123);
})();//123