// back.js

function calculate() {
    // Obtener los datos del formulario
    var edad = parseFloat(document.getElementById("edad").value);
    console.log('estoy recibiendo la edad  '+ edad);

   

    // Realizar la operación
    var result;

    var car =  document.getElementById("car");
    
    
 if (edad >= 18 && car.checked ){
        result =  " Puedes manejar";
 } else if
   (edad < 18 && car.checked ){
    result =  " No puedes manejar";
 }
 else if
   ( edad && !car.checked ){
    result =  " No puedes manejar porque no tienes carro";
}
 console.log('estoy recibiendo un resultado '+ result);
    // Mostrar el resultado en la página
    document.getElementById("result").innerText = "Resultado: " + result;
}