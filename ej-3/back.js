// back.js

function calculate() {
    // Obtener los datos del formulario

    var mes = document.getElementById("month").value;
    

    // Realizar la operación
    var result;
    switch (mes) {
        case "uno":
            result = "Enero";
            break;
        case "dos":
            result = "Febrero";
            break;
        case "tres":
            result = "Marzo";
            break;
        case "cuatro":
            result = "Abril";
            break;
        case "cinco":
            result = "Mayo";
            break;
        case "seis":
            result = "Junio";
            break;
        case "siete":
            result = "Julio";
            break;
        case "ocho":
            result = "Agosto";
            break;
         case "nueve":
            result = "Septiembre";
            break;
        case "diez":
            result = "Octubre";
            break;
        case "once":
            result = "Noviembre";
            break;
        case "doce":
            result = "Diciembre";
            break;
        default:
            result = "Operación no válida";
    }

    // Mostrar el resultado en la página
    document.getElementById("result").innerText = "Resultado: " + result;
}
