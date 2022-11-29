/* INVENTARIO */
let listaHelados = [];
class helado {
    constructor (id , nombre, precio, stock, img, categoria,und ){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
        this.categoria = categoria;
        this.und = und;
    }
}

listaHelados.push(new helado (1 , "Tricolor" , 500 , 20 , "./assets/tricolor.jpg" , "cucuruchos" , 1))
listaHelados.push(new helado (2 , "Crocante" , 500 , 20 , "./assets/crocante.jpg" , "palito" ,1))
listaHelados.push(new helado (3 , "Dulce de Leche" , 300 , 20 , "./assets/dulcedeleche.jpg" , "palito" ,1 ))
listaHelados.push(new helado (4 , "Pote Chocolate" , 1200 , 20 , "./assets/potechocolate.jpg" , "potes" ,1))
listaHelados.push(new helado (5 , "Pote Frutilla"  , 1200 , 20 , "./assets/potefrutilla.jpg" , "potes",1))
listaHelados.push(new helado (6 , "Frutilla" , 250 , 20 , "./assets/frutilla.jpg" , "cucuruchos",1))



console.log(listaHelados);
