const error = (): never => {
    throw new Error("algo deu errado!");
}

const loop = (): never => {
    while(true){
        console.log("ola");
    }
}

const validate = (value: string | number) => {
    if (typeof value === "string") {
        return console.log("é uma string");
    } else if (typeof value === "number") {
        return console.log("é um numero");
    }
    console.log(error());
}


validate("d");//é uma string
validate(123);//é um numero

