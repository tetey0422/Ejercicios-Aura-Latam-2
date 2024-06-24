//funcion para saludar
function hi(){
    console.log("¡Hola, mundo!");
    let nombre = prompt("Escriba un nombre:");
    if(nombre === ""){
        console.log("¡Hola mundo!");
    }else {
        console.log(`¡Hola ${nombre}!`);
    }
}

//funcion para doblar el numero
function doblar(){
    let num = prompt("Digite un numero, que sera doblado:");
    
    if (!isNaN(num) && num !== ""){
        let dob = parseFloat(num)*2;
        console.log(`Su numero es ${num} y al doblarlo da ${dob}`);
    } else {
        console.log("Error: Debe ingresar un número válido.")
    }
}

//funcion para ver el promedio de tres numeros
function promedio(){
    let num1 = parseInt(prompt("Digite el primer numero:"));
    let num2 = parseInt(prompt("Digite el segundo numero:"));
    let num3 = parseInt(prompt("Digite el tercer numero:"));
    
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3) && num1 !== "" && num2 !== "" && num3 !== ""){
        let pro = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3))/3;
        console.log(`El promedio de los numero digitados es ${pro}`);
    } else {
        console.log("Error: Debe ingresar tres números válidos.");
        
    }
}

//funcion para saber cual de los 2 es el numero mayo y el menor 
function maMe(){
    let num1 = parseFloat(prompt("Digite el primer numero:"));
    let num2 = parseFloat(prompt("Digite el segundo numero:"));
    
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Error: Debe ingresar dos números válidos.");
    } else {
        if(num1 > num2){
            console.log(`El mayor es ${num1} y el menor es ${num2}`);
        } else if(num1 < num2){
            console.log(`El mayor es ${num2} y el menor es ${num1}`);
        } else {
            console.log(`Los dos números son iguales: ${num1}`);
        }
    }
}

//funcion para saber el cuadrado de un numero
function porDos(){
    let num = prompt("Digite un numero que sera multiplicado por si mismo:");
    if (!isNaN(num) && num !== ""){
        let cuadrado = parseFloat(num)*parseFloat(num);
        console.log(`El cuadrado de ${num} es ${cuadrado}`);
    } else {
        console.log("Error: Debe ingresar un número válido.");
    }
}