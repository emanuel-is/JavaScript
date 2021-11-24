 

  /* -----------local storage----------- */



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





 /*  crear un programa de votacion. se puede votar por A o por B*/

 /* crear la funcion cargarvotante : dni y voto */


 //localStorage.setItem( clave , valor);
 //localStorage.getItem ( clave);
//localStorage.key( valor );

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

