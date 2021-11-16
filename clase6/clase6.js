// creaR UN ARREGLO DE ALU8MNOS.
//LOS ALUMNOS SE INGRESAN POR TECLADO.










//crear una clase unsuario : nombre, edad , dni. 
//crea un metodo que retotne si el usuario es mayor de 18.


/* 
let usuariCoder= [];

for (let i = o; i < 5 ; i++ ){

    let nombre = prompt("ingrese su nombre");
    let edad = parseInt(prompt("ingrese su edad"));
    let dni = parseInt(prompt("ingrese su dni"));



    usuariCoder.push(new usuariCoder [nombre, edad, dni])
}
  */




                             /* -------------foreach----------*/
 
const numeros = [1 , 2 , 10 , 22 , 30 , 44 , 58];     // declaro el objeto.
var suma = 0;                                             // inicio contador en cero
let contadorLetras = {};

numeros.forEach( item => {suma = suma + item ;console.log (suma);}) //recorro el objeto con el forEach y le digo que
                                                                    //sume a suma cada item. si pongo la consola en la funcion 
                                                                    //me muestra la suma de cada instancia.


console.log (suma);       //imprimo la suma total



const letras =["a" , "b", "b", "a" , "x" , "c" , "d", "d", "h", "b", "c" , "d", "a", "y", "g" ];

letras.forEach (item => {  //recorro los items 
    if (contadorLetras[item]){ // condiciono para que por cada contador de item sume 1.     
        contadorLetras [item]++;
    }
    else{                        // en caso contrario el item es solo uno
        contadorLetras[item] = 1;
    }
    console.log(contadorLetras);  //si imprimo dentro del bucle me muestra cada una de las vueltas que da.
})
console.log(contadorLetras);   // si imprimo por fuera me muestra solo el final.

