
$('#btnToogle').click(function(){

    $('p').css('color', 'white').slideToggle('slow', function(){
        $('p').slideToggle('slow')
        $('p').css('color', 'black')
    }); // 

})

$('#btnDown').click(function(){

    $('p').slideDown('1000');

})

$('#btnUp').click(function(){

    $('p').slideUp('1000');

})

$('#btnFadeOut').click(function(){

    $('.caja').fadeOut('1000');

})
$('#btnFadeIn').click(function(){

    $('.caja').fadeIn('1000');

})

//---------------animacion------


$("#btnAni").click(function(){

    $(".caja2").animate({margin:'300px',width:'400px',height:'400px',opacity:'0.8',
                        margin:'60px',width:'300px',height:'300px',opacity:'0.6'});
    
})


let nombreCompleto = "islas emanuel";

let nombre = nombreCompleto.slice(6, 13);

console.log(nombre);