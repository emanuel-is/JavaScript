



 function validar  (){

    let usuario = document.getElementById("nombreUsuario");
    let pass = document.getElementById ("passUsuario")
    let mensaje = document.getElementById ("mensaaje");


    if (usuario.value =="pepe " && pass.value == "1234"){


        console.log("bienvenido al sistema");
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "bienvenido a mi sistea";
        parrafo.style.color = "red";
        parrafo.style.fontSize = "40px";



        mensaje.appendChild(parrafo);
    }
 }





 //------------------- LISTA DE COMPRAS........

function listaCompras(){ 

    let item = document.getElementById("elemento");
    let lista = document.getElementById("lista");

    let nuevoLi = document.createElement("li");

    nuevoLi.innerHTML = `${valor.value}`;

    lista.appendChild(nuevoLi);
}