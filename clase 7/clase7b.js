// --------- json ----------------- //





      //   ------ creo el objet ----------
 let producto =  {nombre :"anillo_corona_pulida" , material :"oro_y_diamante" , precio : 30000 }; //creo un objeto.

 localStorage.setItem( 1 , producto); //lo intento guardar pero lo guarda como [objet, objet]

console.log(sessionStorage.getItem(1, producto)); // cuando lo intento retornar me devuelve lo mismo. [objet, objet]

        //----------convierto el objeto a Json y despues lo almaceno---------//


let productoJSON = JSON.stringify(producto);  //creo una variable para convertir a producto en un string de JSON.
console.log(productoJSON);           //imprimo y devuelve un strin del objeto.

sessionStorage.setItem(2 , productoJSON);   // de esta forma lo puedo almacenar en el local o session sin problemas


    // -------- lo llamo del local o session con get yy despues lo parseo a objeto------//

sessionStorage.getItem(productoJSON);  // llamo al session  del productoJson

let productoObjet = JSON.parse(productoJSON) // creo una variable y parseo al objeto con Json



console.log(productoObjet);    // imprimo esa nueva variable.








// ----------------- ejercicio ----------------------

 /*  crear un programa de votacion. se puede votar por A o por B*/

 /* crear la funcion cargarvotante : dni y voto */


 //localStorage.setItem( clave , valor);
 //localStorage.getItem ( clave);
//localStorage.key( valor );
 
function cargarVotante (){ // creo lA FUNCION PARA QUE CUANDO HAGO CLICK CUMPLA CON LA FUNCION.


    let dni = prompt("ingrese dni"); 
    let voto = prompt("ingrese voto");


    localStorage.setItem( dni , voto);             //ALMACENO CADA VOTANTE Y VOTO REALIZADO.
}


 let a = 0; // INICIO CONTADORES EN CERO
 let b = 0;


function resultado (localStorage){  //CREO LA FUNCION PARA QUE CUENTE EL RESULTADO DE LA VOTACION.


    for (let i = 0 ; i < localStorage.length ; i ++ ){

        let clave = localStorage.key(i);//  CREO VARIABLE CON LAS CLAVES ALMACENADAS.
        let valor = localStorage.getItem(clave); // CREO VVARIABLE PARA QUE RETORNE DEL LOCAL ESA CLAVE VALOR DE CADA VOTANTE

        if (valor.toLocaleUpperCase() == "A" ){ // toLocaleUpperCase convierte todo el strin a mayus para que no haya problemas de escritura.
            a= a + 1;         // CONDICIONO PARA QUE CUENTE LAS A Y LAS SUME.
        }

        else if (valor.toLocaleUpperCase() == "B"){
            b = b + 1 ;
        }
        else{
            console.log("voto nulo")
            
        }
    }

    console.log ("Total votos a :"+ a );
    console.log ("Total votos b :"+ b );

}
