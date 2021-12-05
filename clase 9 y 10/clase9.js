
/* 
let boton = document.getElementById("boton"); // 

boton.addEventListener("click", function saludar (){ console.log("holaaa");
});  // asocio un evento a ese boton. y le digo que cumpla con la funcion
 */



/* boton.addEventListener("mousedown" ,function(e){
                                            console.log(e);
                                            }); */




let boton=document.getElementById("boton1");

boton.addEventListener("click", respuestaBoton());

function respuestaBoton(con){

    let contener = document.getElementById("container");

    let saludar = document.createElement("p");

    saludar.innerHTML= "Hola Zoquetes";
    contener.appendChild(saludar.value);
    console.log(saludar);

    /* console.log("hola") */
}


const database = [];
let inputValues = {
  name: '',
  lastname: '',
  email: '',
  dni: '',
  phone: '',
};

const handleInput = (e) => {
  inputValues = {
    ...inputValues,
    [e.target.name]: e.target.value,
  };
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (Object.values(inputValues).includes('')) {
    console.log('Completa los datos!!!');
    return;
  }

  database.push(inputValues);
  console.log(database);

  form.reset();
};

const inputs = document.querySelectorAll('.input');
inputs.forEach((input) => input.addEventListener('input', handleInput));

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);
