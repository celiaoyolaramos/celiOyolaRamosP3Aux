
"use strict";

const buttonPoll = document.querySelector(".poll");
// SU CODIGO EMPIEZA DESDE AQUI
const poll={
    question: "what is your favorite programing language?",
    options:["0:javascript","1:Python", "2:Rust","3:c++"],
    answers:new Array(4).fill(0),
};
//1:cree un metodo llamado 'registerNewAnswer' con el objeto 'poll'.El metodo hace 2 cosas
//Muestre un prompt para que el usuario ingrese el numero de la opcion seleccionada 
//segun el numero de entrada actualice la propiedad 'answers'
//2: Llame a este metodo siempre que al usarlo haga click en el boton Anwer poll
const al=poll;


buttonPoll.addEventListener('click',function registerNweAnswer (al){
    console.log(poll.question);
        for(let i=0;i<poll.options.length;i++){
            console.log(poll.options[i]);
        }
        
        let e=prompt("escriba una opcion")
    if (e==0){
        poll.answers[0]+=1;
        console.log(poll.answers);
            }
    if(e==1){
        poll.answers[1]+=1;
        console.log(poll.answers);
    }
    if(e==2){
        poll.answers[2]+=1;
        console.log(poll.answers);
    }
    if(e==3){
        poll.answers[3]+=1;
        console.log(poll.answers);
    }
    if(e>3 ){
        console.log("no es una opcion valida");
    }
    displayResults(al);
});
//3:cree un metodo displayResults qu emuestre los resultados de la encuesta
const displayResults=(type)=>{
    console.log(type.answers);
}
displayResults(al);