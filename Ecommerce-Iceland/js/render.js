/* Etiquetas */
let main_instancia = document.querySelector(".main_instancia");
let offcanvas = document.querySelector(".offcanvas_shop");
let btnOpen = document.querySelector(".btn-open");
let btnClose = document.querySelector(".btn-close");

/* Botones del carrito de compras */
btnOpen.addEventListener('click' , function(e){
    e.preventDefault();
    offcanvas.classList.add('active');
} );

btnClose.addEventListener('click' , function (e){
    e.preventDefault();
    offcanvas.classList.remove('active');
});

/* Pagnina de inicio */
let renderInicio = () => {  
    let section = document.createElement("section");
    main_instancia.innerHTML = ""
    section.innerHTML = `
    <section class = "container-fluid"> 
    <h2 class = "titulo"> LOS MEJORES HELADOS </h2>
    <h3 class = "presentacion">Somos Iceland </br> Helados para disfrutar en familia</h3>
    </section>`
    main_instancia.appendChild(section);
    
}
renderInicio();

/* Render de categorias */
let renderPotes = () =>{
    let potes = listaHelados.filter(e => e.categoria == "potes");
    main_instancia.innerHTML = ""
    
    potes.forEach((e) => {
        let div = document.createElement("div")
        div.classList.add('container_card')
        div.innerHTML=
                    `<div class="card col p-2">
                    <img src="${e.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${e.nombre}</h5>
                            <p class="card-text">$${e.precio}</p>
                            <p class="card-text">Disponibles: ${e.stock}</p>
                            <a href="#" id = "id${e.id}" class="btn btn-warning" id="btn-añadir">Añadir al carrito</a>
                        </div>
                    </div>                       
                    `                            

                    main_instancia.appendChild(div);
        let btn_borrar = document.getElementById(`id${e.id}`);
         btn_borrar.addEventListener("click", () => agregar_al_carrito(e.id));    
    })
}
/* CATEGORIA PALITOS */
let renderPalitos = () =>{
    let palitos = listaHelados.filter(e => e.categoria == "palito");
    main_instancia.innerHTML = ""
    palitos.forEach( (e) => {
        let div = document.createElement("div");
        div.classList.add('container_card')
        div.innerHTML=
                    `<div class="card col p-2">
                    <img src="${e.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${e.nombre}</h5>
                            <p class="card-text">$${e.precio}</p>
                            <p class="card-text">Disponibles: ${e.stock}</p>
                            <a href="#" id = "id${e.id}" class="btn btn-warning" id="btn-añadir">Añadir al carrito</a>
                        </div>
                    </div>                       
                    `                            

                    main_instancia.appendChild(div);
        let btn_borrar = document.getElementById(`id${e.id}`);
         btn_borrar.addEventListener("click", () => agregar_al_carrito(e.id));  

    })        
}
/* CATEGORIA CUCURUCHOS */
let renderCucuruchos = () =>{
    let cucuruchos = listaHelados.filter(e => e.categoria == "cucuruchos");
    main_instancia.innerHTML = ""
    cucuruchos.forEach( (e) => {
        let div = document.createElement("div");
        div.classList.add('container_card')
        div.innerHTML=
                    `<div class="card col p-2">
                    <img src="${e.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${e.nombre}</h5>
                            <p class="card-text">$${e.precio}</p>
                            <p class="card-text">Disponibles: ${e.stock}</p>
                            <a href="#" id = "id${e.id}" class="btn btn-warning" id="btn-añadir">Añadir al carrito</a>
                        </div>
                    </div>                       
                    `                            

                    main_instancia.appendChild(div);
        let btn_borrar = document.getElementById(`id${e.id}`);
         btn_borrar.addEventListener("click", () => agregar_al_carrito(e.id)); 
    })        
}
/* CATEGORIA DE TODOS LOS HELADOS */
let renderTodo = () => {
    main_instancia.innerHTML = ""
    listaHelados.forEach( (e) => {
        let div = document.createElement("div");
        div.classList.add('container_card')
        div.innerHTML=
                    `<div class="card col p-2">
                    <img src="${e.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${e.nombre}</h5>
                            <p class="card-text">$${e.precio}</p>
                            <p class="card-text">Disponibles: ${e.stock}</p>
                            <a href="#" id = "id${e.id}" class="btn btn-warning btn-compra" id="btn-añadir">Añadir al carrito</a>          
                        </div>
                    </div>         
                    `                                            

                    main_instancia.appendChild(div);
        let btn_borrar = document.getElementById(`id${e.id}`);
         btn_borrar.addEventListener("click", () => agregar_al_carrito(e.id)); 
    })        
}

/* API temperatura y ubicacion  */
fetch('https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&units=metric&appid=451aa8f2fef43a3414f1c441922bdd4a')
    .then(response => response.json())
    .then(data => {
        let temperatura = data.main.temp;
        let ubicacion = data.name;
        console.log(temperatura , ubicacion)

        let p_ubicacion = document.querySelector(".temp");
        p_ubicacion.innerHTML=`<p><i class="bi bi-geo"></i> Ubicacion: ${ubicacion} - Temperatura: ${temperatura} `

    })
