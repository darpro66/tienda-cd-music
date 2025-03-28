const prod = [
    {
        imagen: 'img/acido-arg.jpg',
        nombre: 'Producto 1',
        comprar: 'comprar',
        precio: 60000
    },
    {
        imagen: 'img/acido-arg.jpg',
        nombre: 'Producto 1',
        comprar: 'comprar',
        precio: 50000
    },
    {
        imagen: 'img/acido-arg.jpg',
        nombre: 'Producto 1',
        comprar: 'comprar',
        precio: 10000
    },

    {
        imagen: 'img/acido-arg.jpg',
        nombre: 'Producto 1',
        comprar: 'comprar',
        precio: 50000
    },
    {
        imagen: 'img/acido-arg.jpg',
        nombre: 'Producto 1',
        comprar: 'comprar',
        precio: 100000
    },
    {
        imagen: 'img/acido-arg.jpg',
        nombre: 'Producto 1',
        comprar: 'comprar',
        precio: 40000
    },
    {
        imagen: 'img/acido-arg.jpg',
        nombre: 'Producto 1',
        comprar: 'comprar',
        precio: 100000
    },
    {
        imagen: 'img/acido-arg.jpg',
        nombre: 'Producto 1',
        comprar: 'comprar',
        precio: 80000
    },
    {
        imagen: 'img/acido-arg.jpg',
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
        imagen: 'img/acido-arg.jpg',
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
      ${prod.comprar}
    </div>
  </article>
</div>
       
 

 `     



 
})
}





/*    /*
    
    // Agrega más productos hasta tener al menos 10*/