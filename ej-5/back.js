function calcularPrecio() {
   var edad = parseInt(document.getElementById("edad").value);
   var tipoVisitante = document.querySelector('input[name="tipoVisitante"]:checked').value;

   var precioBase;
   if (edad >= 18) {
       precioBase = 20000; // Precio para mayores de 18 años
   } else {
       precioBase = 10000; // Precio para menores de 18 años
   }

   var precioFinal;
   if (tipoVisitante === "extranjero") {
       precioFinal = precioBase * 2; // Precio doble para extranjeros
   } else {
       precioFinal = precioBase;
   }

   document.getElementById("resultado").innerText = "Precio de la entrada: $" + precioFinal;
}
