function calcularAC(){
    var base = parseFloat(document.getElementById("ladoC1").value);
    console.log('estoy recibiendo la base  '+ base);

    var altura =  parseFloat(document.getElementById("ladoC2").value);
    console.log('estoy recibiendo la altura  '+ altura);

    var resultadoCAC = base * altura;
    document.getElementById("resultadoCAC").innerText = "El área del cuadrado es: " + resultadoCAC;
}

function calcularAR(){
    var base = parseFloat(document.getElementById("baseR").value);
    console.log('estoy recibiendo la base  '+ baseR);

    var altura =  parseFloat(document.getElementById("alturaR").value);
    console.log('estoy recibiendo la altura  '+ alturaR);

    var resultadoCAR = base * altura;
    document.getElementById("resultadoCAR").innerText = "El área del rectángulo es: " + resultadoCAR;
}

function calcularAT(){
    var base = parseFloat(document.getElementById("baseT").value);
    console.log('estoy recibiendo la base  '+ baseT);

    var altura =  parseFloat(document.getElementById("alturaT").value);
    console.log('estoy recibiendo la altura  '+ alturaT);

    var resultadoCAT = (base * altura)/2;
    document.getElementById("resultadoCAT").innerText = "El área del triángulo es: " + resultadoCAT;
}

function calcularAPa(){
    var base = parseFloat(document.getElementById("baseP").value);
    console.log('estoy recibiendo la base  '+ baseP);

    var altura =  parseFloat(document.getElementById("alturaP").value);
    console.log('estoy recibiendo la altura  '+ alturaP);

    var resultadoCAPa = base * altura;
    document.getElementById("resultadoCAPa").innerText = "El área del paralelogramo es: " + resultadoCAPa;
}

function calcularACi(){
    var pi = 3.1416;
    console.log('estoy recibiendo a pi  '+ pi);

    var radio =  parseFloat(document.getElementById("radio").value);
    console.log('estoy recibiendo el radio  '+ alturaP);

    var resultadoCACi = pi * radio**2;
    document.getElementById("resultadoCACi").innerText = "El área del paralelogramo es: " + resultadoCACi;
}

function calcularATra(){
    var baseMayor = parseFloat(document.getElementById("baseMayor").value);
    console.log('estoy recibiendo la base mayor'+ baseMayor);

    var baseMenor =  parseFloat(document.getElementById("baseMenor").value);
    console.log('estoy recibiendo la base menor'+ baseMenor);

    var alturaTra =  parseFloat(document.getElementById("alturaTra").value);
    console.log('estoy recibiendo la altura  '+ alturaTra);

    var resultadoCATra = ((baseMayor * baseMenor)*alturaTra)/2;
    document.getElementById("resultadoCATra").innerText = "El área del trapecio es: " + resultadoCATra;
}

function calcularAP(){
    var perimetro = parseFloat(document.getElementById("perimetro").value);
    console.log('estoy recibiendo el perimetro  '+ perimetro);

    var apotema =  parseFloat(document.getElementById("apotema").value);
    console.log('estoy recibiendo el apotema  '+ apotema);

    var resultadoCAP = (perimetro * apotema)/2;
    document.getElementById("resultadoCAP").innerText = "El área del polígono regular es: " + resultadoCAP;
}