function imc(){
    let altura = parseFloat(prompt("Hola, por favor indique su altura en centimetros (cm):"));
    let peso = parseFloat(prompt("Hola, por favor indique su peso en kilogramos (kg):"));
    if (!isNaN(altura) && !isNaN(peso) && altura !== "" && peso !== ""){
        let imc = (parseFloat(peso) / (parseFloat(altura) * parseFloat(altura)));
        console.log(`El IMC es de ${imc.toFixed(2)}`);
        if (imc < 18.5) {
            console.log("Bajo peso");
        } else if (imc >= 18.5 && imc < 25){
            console.log("Peso normal");
        } else if (imc >= 25 && imc < 30){
            console.log("Sobrepeso");
        } else {
            console.log("Obesidad");
        }
    } else {
        console.log("Error: Debe ingresar el peso y la altura en los parametros requeridos (KG o CM).");
        
    }
}

function facto(){
    let num = parseInt(prompt("Por favor indique un nemero para calcularo su valor factorial"));
    if (!isNaN(num) && num !== ""){
        let factorial = 1;
        
        for (let i = 1 ; i <= num ; i++){
            factorial *= i;
        }
    }
}

function conver(){
    let num = parseFloat(prompt("Por favot indique el valor para pasar de dolares a pesos colombianos:"));
    if (!isNaN(num) && num !== ""){
        let valor = num * 4100
        console.log(`sus ${num} cop, son ${valor} dolares americanos`);
    }   
}

function area(){
    let lado = parseFloat(prompt("Por favor indique su lado en centimetros (cm)"));
    let altura = parseFloat(prompt("Por favor indique su lado en centimetros (cm)"));
    if (!isNaN(lado) && !isNaN(altura) && lado !== "" && altura !== ""){
        let area = altura + lado;
        let perimetro = 2* (area);
        console.log(`El area es de ${area} centimetros (cm)`)
        console.log(`El perimetro es de ${perimetro} centimetros (cm)`)
    } else {
        console.log("Error, debe ingresar los valores requeridos.")
    }
}

function areaCirculo (){
    let radio = parseFloat(prompt("Por favor indique el radio de la circunferencia en centimetros (cm)"));
    if (!isNaN(radio) && radio !== ""){
        let area = Math.PI * Math.pow(radio,2);
        console.log(`El area es de ${area.toFixed(2)} centimetros(cm)`);
    } else {
        console.log("Error, debes ingresar los parametros requeridos");
    }
}

function tablaMult (){
    let num = prompt("Por favor indique el numero que desea ver la tabla de multiplicar");
    num = parseInt(num);
    if (!isNaN(num) && num != ""){
        for (let i = 0; i <= 10; i++){
            console.log(`${num} x ${i} = ${num * i}`);
        }
    } else {
        console.log("Error, debes ingresar un numero valido");
    }
}

tablaMult();