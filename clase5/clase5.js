// ------------------------ OBJETOS ----------------------

// objetos literables.

/* 
let alumnoCoder = {     // objeto creado manualmente con tres parametros y valores diferentes.

    nombre: "pepe",
    edad: "33",
    nota: 10,
}
  */
 /* 
function gatito (nombre, dueño, edad) {      //  creo una funcion contructora con 3 variables y valores diferentes.
    this. nombre = nombre; 
    this. dueño = dueño;
    this. edad = edad;

    this. saludar = function (){            //   creo el parametro saludar = function  para que cada vez que se llame 
                                            //a la funcion cumpla con la siguiente 

        alert(this.nombre + " : miauu");        // creo la elerta ára que cada gato salude.
    }

    this. edadGatuna = function(){ 
        alert (this.edad * 7)
    }

}


let bolaDeNieve = new gatito ("bola de nieve", "lisa", 5);  // creo variable con new objeto
bolaDeNieve.saludar();                                      // llamo a lka vcariable. funcion saludar. 
bolaDeNieve.edadGatuna();                                   // llamo a la variable.funcion edad gatuna.

let donGato = new gatito ("Don Gato", "quiensabe", 7);          // creo variable con new objeto
donGato.saludar ();                                         // llamo a lka vcariable. funcion saludar.
donGato.edadGatuna();                                       // llamo a la variable.funcion edad gatuna.

console.log(donGato ,bolaDeNieve);
 */


//Declarar un clase Tienda que permita registrar:
//Nombre de la tienda.
//Dirección de la tienda.//
//Propietario de la tienda.
//Rubro de la tienda.
//Luego invocar al menos tres (3) objetos usando esta clase.



function tienda (nombre, direccion, propietario, rubro){ 
    this.nombre = nombre;
    this.direccion = direccion;
    this.propietario = propietario;
    this.rubro=rubro;

}

let tiendaMia = new tienda("Tienda Mia", "av 14", "la vieja", "almacen");
let laFerre = new tienda ("La Ferreteria N°1", "sallares 654", "Alfredo G", "Ferreteria multi-rubro");
let almacen = new  tienda ("Lo de Clau","Santa Fe 348","Claudia Diav","Almacen y Fiambreria");

console.log(tiendaMia, laFerre,almacen);

/* Solicitar al usuario el registro de cinco (5) tiendas.
Emplear la clase Tienda de la actividad 1, para instanciar los objetos en función de las entradas capturadas.
Generar una única salida compuesta por la información de los objetos instanciados. */



for (let i = 0; i <5 ; i++) {
    let tiendas = new tienda (prompt("nombre de la tienda"), prompt("direccion de la tienda"),
                            prompt("propietario de la tienda"), prompt("rubro de la tienda"));

}
/* let tiendas = "Tienda: "+ tienda.nombre+" "+
"Direccion: "+tienda.direccion+" "+
"Propitario: "+tienda.propietario+" "+
"rubro: "+tienda.rubro+"\n"; */

alert(tiendas);



