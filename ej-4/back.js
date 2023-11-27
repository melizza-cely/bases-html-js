// back.js

function typeOfAnimal(){
    // Obtener los datos del formulario
    var animals = document.getElementById("animals").value;
    console.log('estoy recibiendo un nombre '+ animals);
    
    var result;
 if (animals == 'fish'){
        result = "Anchoa, Atún, Bacalao, Besugo, Bonito ";
 } else if(animals == 'amphibians'){
    result = "Ranas y sapos, salamandras y tritones y cecílidos";
 } else if(animals == 'reptiles'){
    result = "lagartos (saurios), cocodrilos, serpientes (ofidios) y tortugas (quelonios)";
 }else if(animals == 'birds'){
    result = "Aguilas, Aves, Patos, Colibríes";
 }else if(animals == 'mammals'){
    result = "Caballo, la oveja o el elefante; carnívoros";
 }
 console.log('Animales como: '+ result);
    // Mostrar el resultado en la página
    document.getElementById("result").innerText = "Tipos de animales: " + result;
}