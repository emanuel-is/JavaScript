const clickAgregar = document.querySelectorAll("button");
// console.log(clickAgregar);

let tbody=document.querySelector('tbody')
let carrito = []; 



clickAgregar.forEach(btn =>{
    btn.addEventListener('click', addCarritoItem)
    
}) 


function addCarritoItem(e){

    const button = e.target;
    const item = button.closest('.card');
    const itemTitulo = item.querySelector('.card-title').textContent;
    const itemPrecio = item.querySelector('.precio').textContent; 
    const  itemImg = item.querySelector('.card-img-top').src;
    console.log(itemTitulo, itemPrecio);
    console.log(itemImg);
 
    
    const  nuevoItem ={
        title : itemTitulo,
        precio :itemPrecio, 
        imagen : itemImg,
        cantidad : 1,

    }

    addItemCarrito(nuevoItem);
}

function addItemCarrito(nuevoItem){
    for ( let i =0 ; i < carrito.length; i ++){
        if (carrito[i].title.trim() === nuevoItem.title.trim()){
            carrito[i].cantidad ++;
            console.log(carrito);

            return null
        }
    }
    carrito.push(nuevoItem);
    renderCarrito()

}


function renderCarrito(){
    tbody.innerHTML = ''
    carrito.map(item =>{
        let tr =document.createElement('tr');
        tr.classList.add('itemCarrito');
        let contenido = `<th scope="row">1</th>
                        <td class="table__productos">
                        <img class="imgCarrito" src=${item.imagen} alt="">
                        <h6 class="title">${item.title}</h6>
                        </td>
                        <td class="table__precio"><p>${item.precio}</p></td>
                        <td class="table__cantidad">
                        <input type="number" min="1" value="1" >
                        <button class="delete btn btn-danger">x</button>
                        </td>`;
        tr.innerHTML=contenido;
        tbody.appendChild(tr);

    })
}  