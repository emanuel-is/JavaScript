
/* $("p").hide(); */
/* $("p").show(); */

let parrafo = $("p");
console.log(parrafo);


$("p").css("background-color" , "grey");



/* ------------ lista de compras ---------------*/

$("#boton").click(function() {
    
    let valor = $("input").val();
    $("ul").append(`<li>${valor}</li>`);
    $("ul").empty();
    $("ul").remove();

})