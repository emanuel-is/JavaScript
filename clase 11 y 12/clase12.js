let parrafos = $("p");   // se usa como selector de elementos. reemplaza los quereySelector p getElement. 
let iDes = $("#ides");
let clases = $(".class");




let titulos = $("h1");
titulos.hide();
titulos.show();


$("#boton").click( function(){  // llamo a id boton y le agrego un evento liogado a una funcion

    let valor = $("#nombreUser").val()  ///creo una variable la igualo a el id nombreUser del input y le agrego .val() para que me traiga el valor solo del input
    console.log(valor);

})