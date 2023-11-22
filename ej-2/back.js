// back.js

function calculate() {
    // Obtener los datos del formulario
    var name = document.getElementById("nombre").value;
    console.log('estoy recibiendo un nombre '+ name);
   
    var edad = parseFloat(document.getElementById("edad").value);
    console.log('estoy recibiendo la edad  '+ edad);
    // Realizar la operación
    var result;
 if (edad >= 18){
        result = name + " eres mayor de edad";
 } else {
    result = name + " eres menor de edad";
 }
 console.log('estoy recibiendo un resultado '+ result);
    // Mostrar el resultado en la página
    document.getElementById("result").innerText = "Resultado: " + result;
}