 

  /* -----------local storage----------- */

// const { parse } = require("path/posix");


/* 
  localStorage.setItem ("usuario1" , "pepe");
 localStorage.setItem ("usuario2" , "moni");
 localStorage.setItem ("usuario3" , "paola");
 localStorage.setItem ("usuario4" , "coki");
 
 localStorage.setItem ("fruta1" , "manzana");
 
 localStorage.setItem ("fruta2" , "banana");
 
 localStorage.setItem ("numero1" , "588");

 localStorage.setItem ("numero2" , "1455");



 for ( let i = 0 ; i < localStorage.length ; i ++){ //creo bucle para recorrer todos los elementos almacenados en el local


    let clave = localStorage.key (i);   //creo una variable y le dogo que la clave el la key de cada elemento guardado
    console.log("clave :" + clave );
    console.log ("valor :" + localStorage.getItem(clave)); 
 } 



let user = prompt("ingrese su nombre de usuario");  //creo una variable con nombre
let edad = parseInt(prompt("ingrese su edad"));// creo otra con edad

localStorage.setItem("usuario", user); //guardo en el local con la clave usuario la variable anterior
localStorage.setItem("edad", edad);//guardo con locall con clave edad la variable edad.
let definitivo = [localStorage.getItem("usuario"), localStorage.getItem("edad")];   // creo una variable tipo array para guardad poder manipular esos dos valores guardados
console.log(definitivo)     //los muestro por pantalla.

 */

//    ------------------------ sessionStorage ------------------------------------ //

sessionStorage.setItem("nombre1" , "maxi");
sessionStorage.setItem("nombre2" , "marina");
sessionStorage.setItem("nombre3" , "emanuel");
sessionStorage.setItem("nombre4" , "julieta");
sessionStorage.setItem("nombre5" , "miguel");
sessionStorage.setItem("nombre6" , "victoria");              // almaceno en la session las claves y valores


for (let i = 0 ; i < sessionStorage.length ; i ++){ // creo bucle para recorrer todas las session existentes

    let clave = sessionStorage.key(i);             // almaceno en una variable las claves de se las sessions
    let valor = sessionStorage.getItem(clave); // almaceno el valor de cada sessionStorag trayendolas con getItem y le paso la clave almacenada arriba.
    console.log("clave es igual a :"+ clave); //imprimo
    console.log("valor es igual a : "+ valor);  //imprimo
}




 /*  crear un programa de votacion. se puede votar por A o por B*/

 /* crear la funcion cargarvotante : dni y voto */


 //localStorage.setItem( clave , valor);
 //localStorage.getItem ( clave);
//localStorage.key( valor );
/* 
function cargarVotante (){


    let dni = prompt("ingrese dni");
    let voto = prompt("ingrese voto");


    localStorage.setItem( dni , voto);
}

 let a = 0;
 let b = 0;


function resultado ( ){


    for (let i = 0 ; i < localStorage.length ; i ++ ){

        let clave = lacalStorage.key(i);
        let valor = localStorage.getItem(clave);

        if (valor.toLocaleUpperCase() == "a" ){ // toLocaleUpperCase convierte todo el strin a mayus para que no haya problemas de escritura.
            a= a + 1;
        }

        else if (valor.toLocaleUpperCase() == "b"){
            b = b + 1 ;
        }
        else{
            alert("voto nulo")
        }
    }

    console.log ("Total votos a :"+ a );
    console.log ("Total votos b :"+ b );

}
 */


//82
/* Si no existe un valor con la clave “nombre” en el localStorage,
 solicitar un nombre al usuario, y almacenarlo con dicha clave.
  Si existe, mostrar el nombre obtenido desde el storage con una alerta.
 */
 /*  var usuario = localStorage.getItem('nombre');  //defino una variable en el local y accedo con getItem con la clave sola
  if (usuario == null) { // condiciono para que si no tiene valor cumpla con la condicion
      localStorage.setItem('nombre', prompt('ingrese su nombre')); // pido por prompt que defina el valor de la clave por medio de setItem.
    } 
  else { 
      alert('EL NOMBRE ES ' + usuario);
    } */
  

//83
/* Si no existe un valor con la clave “comidas” en el localStorage, 
crear un array vacío y cargarlo de forma dinámica, solicitando al usuario
nombres de comida de forma consecutiva,  hasta cinco (5) veces. Luego almacenarlo con dicha clave.
Si existe, recorrer el array, e informar por alerta el menú cargado. */


/* let alimento = localStorage.getItem('comidas');
if(alimento == null){
    let morfi =[];
    for (let i = 0 ; i < 5 ; i ++){
        morfi.push(prompt("ingrese una comida"));
    }
    localStorage.setItem('comidas', morfi);
    alert( `el menu es ${morfi}`)
    
} */


//84
/* Declarar un clase Hamburgesa que permita registrar nombre de la hamburguesa,
 el precio, los ingredientes, y el número de combo.
Luego instanciar al menos cinco (5) objetos usando esta clase, asociarlos a un array,
 y almacenarlos con la clave ‘hamburguesas’ en el localStorage. */


 /* class hamburguesa {
    constructor( nombre, precio , ingredientes , combo_numero){
    this.nombre = nombre ;
    this.precio= precio ;
    this.ingredientes = ingredientes;
    this.combo_numero = combo_numero;
    }   
}  */


// -------------after---------------------

/* function agregarUser (){

    let usuario = document.getElementById("usuario");
    let mail = document.getElementById("mail");

    
} */


