const velocidade = 75;
const warn = 85;

const condicao = velocidade >= warn ?
 console.log("recebeu uma multa") :
 console.log("continue andando");

if(velocidade >= warn){
   console.log("recebeu uma multa"); 
}else{
    console.log("continue andando");
}