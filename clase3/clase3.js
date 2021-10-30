/* loguin : pedir usuario y pass al cliente
tiene 3 intentos.
ingreso correcto: en un menensaje de bienvenida con el nombre.
ingreso incorrecto: envio mensaje y finalizo el bucle */


let usuario1 = "ema";
let passUser1 = 1234
let error = 0;

for (let i = 0 ;  i < 4   ; i= i + 1 )  { //inicializo el bucle
    
    let usuario = prompt("ingrese su usuario")  //por cada vuelta pido usuario y contraseña
    let pass = prompt("ingrese su pass")

    if (usuario == usuario1 && passUser1 == pass){  //le pongo la condicio para que entre si se cumple 
        
        console.log ("hola guacho")
    }
    else {
        console.log("error :"+ i);  // muestro en consola el contador de intentos
        error = error + 1;          // por cada intento le sumo 1
        if (error == 3){             //sub condiciono para que cuando sea = a 3 rompa el bucle y muestre mensaje
            console.log("fuiste");
            break;                      //si se da esta condicion rompe el bucle
        }
    }
}

//----------------------- while---------------

let user = prompt("ingrese usuuario o ESC para salir")

while (user != ESC) {
    
}