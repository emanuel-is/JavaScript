
$('#btnToogle').click(function(){

    $('p').css('color', 'white').slideToggle('slow', function(){
        $('p').slideToggle('slow')
        $('p').css('color', 'black')
    }); // 

})

$('#btnDown').click(function(){

    $('p').slideDown('slow');

})

$('#btnUp').click(function(){

    $('p').slideUp('slow');

})

$('#btnFadeOut').click(function(){

    $('.caja').fadeOut('800');

})
$('#btnFadeIn').click(function(){

    $('.caja').fadeIn('800');

})

//---------------animacion------


$("#btnAni").click(function(){

    $(".caja2").animate({margin:'300px',width:'400px',height:'400px',opacity:'0.8',
                        margin:'60px',width:'300px',height:'300px',opacity:'0.6',
                        margin:'20px',width:'100px',height:'100px',opacity:'0.6',});
    
})

$("#btnAni2").click(function(){

    $(".caja2").animate({width:'100px',height:'100px',opacity:'0.6',
                        width:'300px',height:'300px',opacity:'0.6',
                        width:'400px',height:'400px',opacity:'0.8',
                        margin:'0px',width:'500px',height:'500px',opacity:'0.5'});
    
})


let nombreCompleto = "islas emanuel";

let nombre = nombreCompleto.slice(6, 13);
let apellido = nombreCompleto.slice(0,5)
console.log(nombre);
console.log(apellido);