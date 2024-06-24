let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafío";

function cli(){
    console.log("click boton");
}

function amoJs(){
    alert("Amo JS <3");
}

function alerta(){
    let ciudad = prompt("Por favor, ingrese el nombre de una ciudad: ");
    alert(`Estuve en ${ciudad} y me acorde de ti.`);
}

function suma(){
    let numUno = parseInt(prompt("Digite el primer numero que desea sumar: "));
    let numDos = parseInt(prompt("Digite el segundo numero que desea sumar: "));
    let resultado = numUno+numDos;
    alert(`${numUno}+${numDos}=${resultado}`);

}