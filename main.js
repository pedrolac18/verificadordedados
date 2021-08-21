var image = document.getElementById('image');
var text = document.getElementById('text');

/* Nesse caso temos infinito de possibilidades para nomes menos os 3 escolidos.*/

function yy(){

 var ex = text.value;
 let u = "hitler";
 let v = "stalin";
 let w = "mao";



 if(ex == u){
   image.innerHTML = "Nome não permitido";
   image.style.color = "red";
 }else{
    image.innerHTML = "Permitido" + '<button id="button"> Continuar </button>';
    image.style.color = "green";

        if(ex == v){
          image.style.color = "red";
          image.innerHTML = "Nome não permitido";}
        if(ex == w){
          image.style.color = "red";
          image.innerHTML = "Nome não permitido";}
 }

 }


/* Nesse caso temos apenas 4 verdadeiras e as falsas são infinito - 4;*/

 var imagee = document.getElementById('imagee');
 var textt = document.getElementById('textt');


 function classes(){

 var cx = textt.value;

 let a = "Mago";
 let b = "Humano";
 let c = "Elfo";
 let d = "Orc";

     if(cx == a){
       imagee.innerHTML = "Permitido" + '<button id="button"> Continuar </button>';
       imagee.style.color = "green";

     }else{
       if(cx == b){
         imagee.innerHTML = "Permitido" + '<button id="button"> Continuar </button>';
         imagee.style.color = "green";
       }else{
         if(cx == c){
           imagee.innerHTML = "Permitido" + '<button id="button"> Continuar </button>';
           imagee.style.color = "green";
         }else {
           if(cx == d){
             imagee.innerHTML = "Permitido" + '<button id="button"> Continuar </button>';
             imagee.style.color = "green";
           } else {
             imagee.innerHTML = "Nome não permitido";
             imagee.style.color = "red";
           }
         }
       }
     }


 }



 var show = document.getElementById('show');
 var number = document.getElementById('number');

/* Nesse caso faz a verificação de idade, simple true of false;*/

 function idade(){

   if(parseInt(number.value) >= 18 ){
     show.innerHTML = "Permitido" + '<button id="button"> Continuar </button>';
     show.style.color = "green";
   }else {
     show.innerHTML = "Idade não permitida";
     show.style.color = "red";
   }

 }
