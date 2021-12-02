



let titulos = document.getElementById("tituloPrincipal");
let parrafos = document.getElementById("parrafo");



console.dir(titulos.outerText);
console.log(parrafos);
console.log(document.head);




 function validar  (){    //creo la funcio validar

    let usuario = document.getElementById("nombreUsuario"); //creo variable  con el nodo nombre de usuario
    let pass = document.getElementById ("passUsuario") //creo variable con el nodo de pass.
    let mensaje = document.getElementById ("mensaje"); //creo variable de mensaje con el id mensaje creado del div vacio en el html.

    console.log(usuario.value);
    console.log(pass.value);


    if (usuario.value =="pepe" && pass.value == "1234"){


        console.log("bienvenido al sistema"); 
        let parrafo = document.createElement("p"); //creo variable con nodo y le digo que sea un <p>.
        parrafo.innerHTML = "Bienvenido a este Super sistema";  //le digo que a parrafo le muestre el mensaje en el html
        parrafo.style.color = "red";  // incrusto estilos en linea para eel parrafo
        parrafo.style.backgroundColor= "black";
        parrafo.style.fontSize = "20px";

        mensaje.appendChild(parrafo);//le digo que agregue ese parrafo creado al div con id mensaje.
    }
 }





 //------------------- LISTA DE COMPRAS........

function listaCompras(){  //creo la funcion y le asigno "elemento" como elemento entrante.

     let item = document.getElementById("elemento"); //creo variable y le traigo el id "elemento"
    let div = document.createElement("div"); //creo variable div con el elemnto nuevo div.
    
    div.innerHTML= elemento.value;//le digo que a div le muestre en el html el valor del id elemnto
    let contenedor = document.getElementById("contenedor"); //creo variable contenedor con el nodo del id elemento. 
   
    
    contenedor.appendChild(div); // le digo que cada variable contenedor 
    

    /* ------------------------------------------------ */
    let producto = document.getElementById("elemento");                //creo variable con el id elemnto
    let contenido = document.getElementById ("contenedor");            // creo una variable contenido con el id contenedor del div vacio creado en html

    let lista= document.createElement("li");                           //creo variable lista  con una etoqueta li.
    lista.innerHTML=producto.value;                                    //le digo que el contenido de lista en html va a ser el valor de la variable producto.
    contenido.appendChild(lista);                                      // le digo que a cada contenido capturado se le agregue en forma de lista.

}

function borrarElemento(){                                             //creo funcion para borrar elemntos de esa lista.

    let contenido = document.getElementById ("contenedor");             // llamo a la variable contenido con ese id contenedor.

    contenido.removeChild(contenido.lastChild);                         // le digo que remueva cada hijo de esa variable contenido especificando que sea el ultimo que se agrego

}





                 //  DESAFIO



let boton = document.getElementById("calcular");

boton.addEventListener("click",calcular);


function calcular(){   

    let primerN = document.getElementById("numero1");
    let operacion = document.getElementById("operador");
    let segundoN = document.getElementById("numero2");


    if( operacion.value == "*" ){

        let multiplicacion = parseInt(primerN.value) * parseInt(segundoN.value);
        console.log(multiplicacion);
        let contenido = document.getElementById("contenedor2");
        contenido.innerHTML= `<p>El resultado de la multipicacion : ${multiplicacion}</p>`;
        contenido.style.backgroundColor="black";
        contenido.style.color="white";
        contenido.style.fontFamily="arial"; 

    }
    else if (operacion.value == "/" ){

        let division = parseInt(primerN.value) / parseInt(segundoN.value);
         console.log(division);
         let contenido = document.getElementById("contenedor2");
         contenido.innerHTML= `<p>El resultado de la division es : ${division}</p>`; 
         contenido.style.backgroundColor="grey";
        contenido.style.color="purple";
        contenido.style.fontFamily="arial black";
    }
    else if  (operacion.value == "+"){

        let suma = parseInt(primerN.value) + parseInt(segundoN.value);
        console.log(suma);
        let contenido = document.getElementById("contenedor2");
        contenido.innerHTML= `<p>El resultado de la suma es : ${suma}</p>`; 
        contenido.style.backgroundColor="green";
        contenido.style.color="red";
        contenido.style.fontFamily="arial black";
    }
    else if (operacion.value == "-"){

        let resta = parseInt(primerN.value) - parseInt(segundoN.value);
        console.log(resta);
        let contenido = document.getElementById("contenedor2");
        contenido.innerHTML= `<p>El resultado de resta es : ${resta}</p>`; 
        contenido.style.backgroundColor="red";
        contenido.style.color="blue";
        contenido.style.fontFamily="arial black";
    }

    

  

   /*  
    console.log(suma);
      // creo la veriable para ese id del div vacio

    
     */// y le paso lo que tiene que tener por html sin necesidad de crearle ninguna etiqueta

        //de esta forma el contenido se va actualizando en la misma linea.
    

}



