function QualSeuNome(name){
    const msg =  `o seu nome é:`;

    function YourName(){
        return`${msg} ${name}`;
    }
    return YourName();
}  

console.log(QualSeuNome("fernando"));