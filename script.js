1


const prod = [
    {
        imagen: 'img/almafuerte-.jpg',
        nombre: 'Producto 1',
        comprar: 'comprar',
        precio: 60000
    },
    {
        imagen: 'img/almafuerte-1.jpg',
        nombre: 'Producto 1',
        comprar: 'comprar',
        precio: 50000
    },
    {
        imagen: 'img/guns.jpg',
        nombre: 'Producto 1',
        comprar: 'comprar',
        precio: 10000
    },

    {
        imagen: 'img/silider10.jpg',
        nombre: 'Producto 1',
        comprar: 'comprar',
        precio: 50000
    },
    {
        imagen: 'img/ironmaiden.jpg',
        nombre: 'Producto 1',
        comprar: 'comprar',
        precio: 100000
    },
    {
        imagen: 'img/trenloco.jpg',
        nombre: 'Producto 1',
        comprar: 'comprar',
        precio: 40000
    },
    {
        imagen: 'img/megadeth-t.jpg',
        nombre: 'Producto 1',
        comprar: 'comprar',
        precio: 100000
    },
    {
        imagen: 'img/metallica.jpg',
        nombre: 'Producto 1',
        comprar: 'comprar',
        precio: 80000
    },
    {
        imagen: 'img/v8-l.jpg',
        nombre: 'Producto 1',
        comprar: 'comprar',
        precio: 76000
    },
    {
        imagen: 'img/alma-2.jpg',
        nombre: 'Producto 1',
        comprar: 'comprar',
        precio: 88000
    },
    {
        imagen: 'img/nirvana.jpg',
        nombre: 'Producto 1',
        comprar: 'comprar',
        precio: 64000
    },
    {
        imagen: 'img/acido-arg.jpg',
        nombre: 'Producto 1',
        comprar: 'comprar',
        precio: 59000
    },

];

const productosContainerHTML = document.querySelector(".productos-container")


 

function renderProductos(){
prod.forEach((prod) =>{
    productosContainerHTML.innerHTML +=` 

     
<div class="card-wrapper">
  <article class="card">
    <div class="card-header">
      <!--encabezado-->
      <img class="card-img" src="${prod.imagen}" alt="">
    </div>
    <div class="card-main">
      <!--contenido principal-->
      ${prod.nombre}
    </div>
     <div class="card-precio">
    <!--contenido precio-->
     ${prod.precio}
    </div>
    <div class="card-button">
      <!--bonto de compra-->
     <button class="btn-comprar">${prod.comprar}</button>
    </div>
  </article>
</div>
       
 

 `     



 
}


)
}

document.addEventListener('DOMContentLoaded', () => {
    renderProductos(); // Llamamos a la función para generar las tarjetas
});



   /*



*/
