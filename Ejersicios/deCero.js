        /* ejercicio 1:1 */
/* :Crear tres (3) variables para asignar el nombre, apellido y edad de Homero, respectivamente. Es indistinto el empleo de var o  let en la declaración */


var nombre = "Homero";
let segundoNombre = "Jey";
const apellido = "simpson";

        /* ejercicio 1:2 */
/* Crear cinco (5) variables constantes, asignando a cada una de ellas diferentes nombres de ciudades. Generalmente, dichas variables se declaran con const. */

const city1 = "Buenos Aires" ;
const city2 = "Santa Fe";
const city3 = "Cordoba";
const city4 = "Tierra del Fuego";
const city5 = " Jujuy";

        /* ejercicio 1:3 */
/* Declarar variables para representar la información de un carnet de conducir.
Luego, concatenarlas y asignar el resultado de la operación a una variable denominada carnet.
 */

let nombreC = "Emanuel Alejandro";
let apellidoC ="Islas";
let edadC ="33";
let sexo = "masculino";
let fechaNacimientoC ="17-11-1988";
let domicilioC ="Sallares 289";
let CiudadC ="Florencio Varela";
let categoriaC ="A2-B1";
let fechaVencimientoC ="22-02-2021";

const carnet = nombreC+" "+apellidoC+" "+edadC+" "+sexo+" "+fechaNacimientoC+" "+domicilioC+" "+CiudadC+" "+categoriaC+" "+fechaVencimientoC;
console.log(carnet);

        /* ejercicio 1:4 */
 /* Solicitar al usuario cinco (5) nombres pertenecientes a integrantes de una familia. Luego, concatenar dichas entradas y efectuar una salida por alerta. */
 
 
/*  let user1=prompt("ingrese su nombre");
 let user2=prompt("ingrese su nombre");
 let user3=prompt("ingrese su nombre");
 let user4=prompt("ingrese su nombre");
 let user5=prompt("ingrese su nombre");
 alert(user1+" "+user2+", "+user3+" "+user4+", "+user5); */


        /* ejercicio 1:5 */
/* Solicitar al usuario uno o más precios.
Luego, efectuar un descuento en porcentajes (20%, 30%, etcétera) sobre los valores ingresados, y realizar una salida.
 */

/* let Price1 = prompt("ingrese su precio");
alert("el primer precio es:" +Price1);
console.log(Price1);
let descuento20 = Price1 - (Price1 * 0.20);
console.log(descuento20);


let Price2 = prompt("ingrese otro precio");
alert("el segundo precio es: "+Price2);
console.log(Price2);
let descuento30 = Price2 * 0.30 ;
let total30 = Price2 - descuento30;
console.log(total30); */


        /* ejercicio 2:1 */
/* Solicitar al usuario un (1) nombre.
Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. 
Caso contrario, la salida será “Yo no fui”. */

/* let userGuardado = "Brunito_is";

let userName = prompt("ingrese su nombre de user!");

if(userGuardado === userName){
    alert("fui yo");
}else{
    alert("yo no fui!")
} */

        /* ejercicio 2:2 */
/* Solicitar al usuario una (1) tecla.
Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. Caso contrario, la salida será “Error”. */

/* let userKey = prompt("ingrese una letra");

if((userKey === "y") || (userKey === "Y")){
    alert("Correcto");
}else{
    alert("TOCA LOS TARROS!!!!")
} */

        /* ejercicio 2 :3 */
/* Solicitar al usuario un (1) un número.
Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
“Elegiste a Homero” si es 1.
“Elegiste a Marge” si es 2.
“Elegiste a Bart” si es 3.
“Elegiste a Lisa” si es 4.
 */


/* let numero = prompt("ingresa un numero entre 1 y 4");

if(numero == "1"){
        alert("elegiste a Homero");
}
else if(numero =="2"){
        alert("alegiste a marge")
}
else if(numero =="3"){
        alert("alegiste a Bartito")
}
else if(numero =="4"){
        alert("alegiste a lisa")
}else{
        alert("el numero es incorrecto")
} */


        /*ejercicio 2 :4  */
/* Solicitar al usuario un (1) número.
Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda: 
“Presupuesto bajo” si está entre 0 y 1000.
“Presupuesto medio” si está entre 1001 y 3000.
“Presupuesto alto” si es  mayor que 3000.
 */


/* 
let presupuesto = prompt("ingrese el valor de su presupuesto");


if (presupuesto <= 1000){
        alert("Presupuesto bajo");
}
else if ((presupuesto >=1001) && (presupuesto <= 3000)){
        alert("presupuesto medio");
}else{
        alert("presupuesto alto")
} */

        /* ejercicio 2 :5 */
/* Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos fueron cargados,
 realizar una única salida compuesta por el listado de productos. Caso contrario, la salida será “Error: Es necesario cargar todos los productos”. */


/*  let prod1 = prompt("producto 1");
 let prod2 = prompt("producto 2");
 let prod3 = prompt("producto 3");
 let prod4 = prompt("producto 4");

if ((prod1 != "") && (prod2 != "") && (prod3 != "") && (prod4 != "")){
        alert(`el producto 1 es : ${prod1}
                el producto 2 es : ${prod2}
                el producto 3 es : ${prod3}
                el producto 4 es : ${prod4}
        }`)
}else {
        alert("carga los productos")
}
 */

        /* ejercicio 3 : 1 */
/* Solicitar al usuario un (1) un número y un (1) texto.
 Efectuar una salida por alerta con el mensaje ingresado por cada
  repetición, hasta alcanzar el valor señalado por el usuario. */



/* let cantidad = parseInt(prompt("ingrese un numero"));
let contenido = prompt("ingrese un texto");


for(i = 0 ; i < cantidad ; i++){
        console.log(contenido)
} */


        /*ejercicio 3 : 2  */
/* Solicitar al usuario un (1) un número.
 Emplear este valor para determinar la cantidad de repeticiones,
  y efectuar una salida por alerta con el mensaje “lado” en cada repetición. Pero si se alcanza
  un número de iteraciones mayor que cuatro (4), cancelar el ciclo. */


let userNumber = parseInt(prompt("elegi un numero"));
let mensaje = "lado";

for(i =0 ; i < userNumber ; i++){
        console.log(mensaje  + i );
        if(userNumber >=4){
                break
        }
}


        /*ejercicio 3:3  */
/* Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
Luego realizar un única salida por alerta, con el listado de alumnos registrados. */


function alumnosCoder (Nombre){
        this.nombre = Nombre;
}
let alumno =new alumnosCoder (prompt("ingrese el nombre"));
console.log(alumno.nombre);


/* for(i =0 ; i < 10 ; i++){
        let alumnos = [];
        let nombres = prompt("ingrese el nombre");
        nombres=alumnos;
        
} */
/* console.log(alumnos); */