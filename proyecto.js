// agregar producto y cantidad al carrito. 
// agregar otro producto y cantidad al carrito. 
// --pedir localidad y calcular envio. 
// -- calcular precio por cuotas y el interes que tenga.  


let precioPulAcBlanco = 1600;
let precioPulAcNegro = 1600;
let envioCapital = 500;
let envioGBA = 800;


function AgregarCarrito1 (precioPulAcBlanco) {

    let cuantos = parseInt(prompt("ingrese cuantos productos quiere."));
    precio = precioPulAcBlanco * cuantos;
    return precio;

}

function AgregarCarrito2 (precioPulAcNegro) {
    let cantidad = parseInt(prompt("ingrese cuantos productos quiere."));
    precio = precioPulAcNegro * cantidad;
    return precio;
}
function tipoDeEnvio () {

    let destino = prompt("ingrese Capital Federal , Gran Buenos Aires o Provincia");

    if (destino == "Capital Federal" || destino == "capital federal") {
        
        alert("el envio es de :"+ envioCapital);
        return envioCapital
    }
    else if (destino == "Gran Buenos aires" || destino == "gran buenos aires"){

        alert("el envio es de :"+ envioGBA)
        return envioGBA
    }
    else if ( destino == "Provincia" || destino == "provincia" ) {
        console.log ("tiene que consultar costo de envio");
        alert("consultar tipo y costo de envio")
    }
    else{
        alert("ingrese una provincia en envio")
    }
}   

let total = (AgregarCarrito1 + destino);
alert (total)