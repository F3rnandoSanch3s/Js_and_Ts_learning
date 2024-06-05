var error = function () {
    throw new Error("algo deu errado!");
};
var loop = function () {
    while (true) {
        console.log("ola");
    }
};
var validate = function (value) {
    if (typeof value === "string") {
        return console.log("é uma string");
    }
    else if (typeof value === "number") {
        return console.log("é um numero");
    }
    console.log(error());
};
validate("d");
validate(123);
