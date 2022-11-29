let carrito = [];
let contenedor_carrito = document.getElementById('tbody')
/* LocalStorage */
document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"))
        actualizar_carrito();
    }
})
/* Funcion suma de carrito */
let agregar_al_carrito = (e) => {
    let test = carrito.some((item) => item.id === e);
    if(test){
        console.log("Se repite")
        let nuevo_carrito = carrito.map(item => {
            if(item.id === e && item.und < item.stock){
                item.und++
            }
        })
    }
    else{
        console.log("Se agrega por primera vez")
        let item = listaHelados.find((prod)=> prod.id === e)
        carrito.push(item);
    }
    actualizar_carrito();
    console.log(carrito)
}
/* Funcion limpiador de carrito y local storage */
let actualizar_carrito = () => {
    contenedor_carrito.innerHTML = "";
    carrito.forEach((e => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${e.img}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">${e.nombre} $${e.precio}</h5>
                <p class = "descripcion_card"> Unidades: ${e.und} Precio total: $${e.precio * e.und}</p>
                <p></p>
                <button onclick="agregar_al_carrito(${e.id})"class=" borrar_item css_btn"><i class="bi bi-bag-plus"></i></button>
                <button onclick="restar_item(${e.id})"class=" css_btn"><i class="bi bi-dash-circle"></i></button>
                <button onclick="eliminar_del_carrito(${e.id})"class=" css_btn"><i class="bi bi-trash"></i></button>                
                </div>
            </div>
        </div>
        </div>           
        `    
        contenedor_carrito.appendChild(fila);  
        localStorage.setItem('carrito', JSON.stringify(carrito));   
    } ))
    precioTotal.innerText = carrito.reduce((acc , e ) =>  acc + e.precio * e.und, 0);
}
/* Funciones de carrito */
let eliminar_del_carrito = (e_id) => {
    let item = carrito.find(prod => prod.id === e_id);
    let indice = carrito.indexOf(item);
    carrito.splice(indice , 1);
    item.und - 1;
    actualizar_carrito();
}
/* Restador de items */
let restar_item = (e) => {
    let test = carrito.some((item)=> item.id === e);
    if(test){
        console.log("Se repite")
        let nuevo_carrito = carrito.map(item => {
            if(item.id === e && item.und > 1){
                item.und--                
            }
            else if(item.id === e && item.und < 1){
                eliminar_del_carrito();
            }
        })
    }
    actualizar_carrito();
    console.log(carrito)
}
/* Limpiador de carrito compra*/
let limpiarCarrito = () => {
    contenedor_carrito.innerHTML = "";
    carrito = [];
    actualizar_carrito();
}
/* funcion q controla las compras del usuario */
let comprar = () => {

    if(carrito.length === 0){
        Swal.fire({
            title: 'No hay nada en su carrito',
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar'
          })          
    }else{
        Swal.fire({
            title: 'Finalizar compra?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Finalizar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                icon: 'success',
                title: 'Compra finalizada!'                
              }
              )
              limpiarCarrito();
            }
          })
    }
}

