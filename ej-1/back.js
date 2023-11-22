// back.js

function calculate() {
    // Obtener los datos del formulario
    var num1 = parseFloat(document.getElementsById("num1").value);
    var operator = document.getElementById("operator").value;
    var num2 = parseFloat(document.getElementById("num2").value);

    // Realizar la operación
    var result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = "Operación no válida";
    }

    // Mostrar el resultado en la página
    document.getElementById("result").innerText = "Resultado: " + result;
}
