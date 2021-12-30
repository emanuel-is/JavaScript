


let url = "https://jsonplaceholder.typicode.com/posts"


$("#botonGet").click(function(){



    $.get(url, function(datos){

        console.log(datos);
    })
})


let cliente = {nombre: "bruno" , apellido : "islas" , edad : 07 };

$("#botonPost").click(function(){



    $.post(url,cliente,function(datos){

        console.log(datos);
    })
})


let urlSTW =  "http://hp-api.herokuapp.com/api/characters";


$("#botonStw").click(function(){

    $.get(urlSTW, function(datos){
        console.log(datos)
        for(let personajes of datos){
                            $("body").append(`<div>
                                <h3>${personajes.name}</h3>
                                <h3>${personajes.actor}</h3>
                                <h3>${personajes.house}</h3>
                                
                                <img src="${personajes.image}" alt="">
                            `);

        }
    })
        
});




/* -------------------geolocalizacion----------- */

let ubicacion = navigator.geolocation.getCurrentPosition(mostrarUbicacion);


function mostrarUbicacion(position){
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);

}



let urlClima = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e66b7c8dc0fe7155a696b775ed1b44ec";

$("#botonClima").click(function(){

    $.get(urlClima, function(respuesta){
        console.log(respuesta);
    })

});

let climaAjax = $.ajax({

    url:"http://api.openweathermap.org/data/2.5/weather",
    type: "GET",
    data:{
        q: 'Buenos Aires',
        appid:"e66b7c8dc0fe7155a696b775ed1b44ec",
        dataType:"jsonp",
        units:"metric",
    },

    success:function(data){
        console.log(data);
    }
})


console.log(climaAjax);