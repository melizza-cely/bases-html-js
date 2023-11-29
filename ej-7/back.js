function obtenerFruta(){

    const frutas = ["Manzana", "Durazno", "Banano", "Sandía", "Cereza", "Mora", "Naranja", "Frambuesa", "Mandarina", "Granada", "Piña"];
    const numero = document.getElementById("numero").value;

    const resultado = frutas[numero];

    document.getElementById("resultado").innerText = "Resultado: " + resultado;    
}