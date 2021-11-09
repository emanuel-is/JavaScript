// ------------------------ OBJETOS ----------------------

// objetos literables.

/* 
let alumnoCoder = {  

    nombre: "pepe",
    edad: "33",
    nota: 10,
}
  */
 
function gatito (nombre) {      // 
    this. nombre = nombre; 
    this. dueño = dueño;
    this. edad = edad;

    this. saludar = function(){

        alert(this.nombre + " : miauu");
    }

    this. edadGatuna = function(){
        return this.edad * 7
    }

}


let bolaDeNieve = new gatit ("bola de nieve");
bolaDeNieve.saludar();

let donGato = new gatito ("Don Gato");
donGato.saludar ();

let gatitoUsuario = prompt("ingrese el nombre de su gato");

let nuevoGato = new gatito (gatitoUsuario)
