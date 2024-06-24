let listaGenerica = [];
let lenguajesDeProgramacion = ["JavaScript", "C", "C++," "Kotlin", "Python"];
let listaNum = [];
let resultado = sumalista();

lenguajesDeProgramacion.push ("Java", "Ruby", "GoLang");

function mostrasListaLDP(){
    console.log(lenguajesDeProgramacion);
}

function mostrasListaLDPInverso(){
    console.log(lenguajesDeProgramacion.reverse());    
}

function promListNum(){
    let sum = listaNum.reduce((a, b) => a + b, 0);
    let prom = sum/ listaNum.length;
    console.log(prom);
}

function numMaxMin(){
    console.log(Math.max(...listaNum));
    console.log(Math.min(...listaNum));
}

function sumalista(){
    return listaNum.reduce((a, b) => a + b, 0);
    console.log(resultado);
}

