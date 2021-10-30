/* // -----------pedir un numero, ponerle un condicional y mostrarle al usuario.------------
let numero = prompt ("ingrese un numero entre 10 y 20");
console.log(numero);
if (numero <10){
    alert ("el numero es menor que 10");
}
else if (numero > 20){
    alert("El numero el seperior a 20")
}
else {
    alert(`El numero es : ${numero}`)
}

//-------------pedir datos y mostrarlo por al usuario.-----------
 const nombre = prompt ("Ingrese su nombre");
 const apellido = prompt ("ingrese su apellido");
 const edad = prompt ("ingrese su edad");
 alert(nombre + " " + apellido + " "+ edad + " " +"(años)")



 //-------------promedio de estatutar.-------------------
const user1 = parseFloat(prompt("ingrese estatura del primer USER"));
console.log("estatura del primer USER :" + user1);
const user2 = parseFloat(prompt("ingrese estatura del segundo USER"));
console.log("estatura del segundo USER :" + user2);
const user3 = parseFloat(prompt("ingrese estatura del  tercer USER"));
console.log("estatura del tercer USER :" + user3);
const user4 = parseFloat(prompt("ingrese estatura del cuarto USER"));
console.log("estatura del cuarto USER :" + user4);

const suma = user1 + user2 + user3 + user4;
const promedio = suma / 4;
console.log ("La estatura promedio de los USER es :" +promedio) */


//---------------operador and--------------
let nombreDeUsuario = prompt("ingrese ssu nombre de Usuario");
let passDeUsuario = prompt("Ingrese su Password");

if ((nombreDeUsuario != "") && (passDeUsuario != "")){
    console.log(`el usuario ${nombreDeUsuario} se ha registrado`);
    alert("Bienvenido :"+ nombreDeUsuario);
}
else {
    alert( "NO ingreso ningun nombre de usuario y contraseña" )
}


