1


const prod = [
    {
        imagen: 'img/almafuerte-.jpg',
        nombre: 'almafuerte:ultimando',
        comprar: 'comprar',
        precio: '$60.000',
        stoc:'0'
    },
    {
        imagen: 'img/almafuerte-1.jpg',
        nombre: 'almafuerte:trillando la fina',
        comprar: 'comprar',
        precio: '$50.000',
         stoc:'0'
    },
    {
        imagen: 'img/guns.jpg',
        nombre: 'guns:appetite for destruction',
        comprar: 'comprar',
        precio: '$10.000',
         stoc:'5'
    },

    {
        imagen: 'img/silider10.jpg',
        nombre: 'almafuerte:toro&pampa',
        comprar: 'comprar',
        precio: '$50.000',
         stoc:'0'
    },
    {
        imagen: 'img/ironmaiden.jpg',
        nombre: 'iron maiden:the number of the best',
        comprar: 'comprar',
        precio: '$100.000',
         stoc:'45'
    },
    {
        imagen: 'img/trenloco.jpg',
        nombre: 'tren loco:venas de acero',
        comprar: 'comprar',
        precio: '$40.000',
         stoc:'22'
    },
    {
        imagen: 'img/megadeth-t.jpg',
        nombre: 'megadeth:rust in peace',
        comprar: 'comprar',
        precio: '$100.000',
         stoc:'0'

    },
    {
        imagen: 'img/metallica.jpg',
        nombre: 'metallica;black&album',
        comprar: 'comprar',
        precio: '$80.000',
         stoc:'2'

    },
    {
        imagen: 'img/v8-l.jpg',
        nombre: 'v8:luchando por el metal',
        comprar: 'comprar',
        precio: '$76.000',
         stoc:'12'

    },
    {
        imagen: 'img/alma-2.jpg',
        nombre: 'almafuerte:piedra libre',
        comprar: 'comprar',
        precio:'$88.000',
         stoc:'0'

    },
    {
        imagen: 'img/nirvana.jpg',
        nombre: 'nirvana:unplugged',
        comprar: 'comprar',
        precio: '$64.000',
         stoc:'1'

    },
    {
        imagen: 'img/acido-arg.jpg',
        nombre: 'hermetica:acido argentino',
        comprar: 'comprar',
        precio: '$59.000',
         stoc:'4'

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

const tableHTML = document.getElementById("table-container")
const tableBodyHTML = document.getElementById("table-body")

function renderProd(arrayProd){


    tableBodyHTML.innerHTML = ''

arrayProd.forEach((prod) => {
 
  tableBodyHTML.innerHTML += `   
  

  <tr>
            <td class="td-disco">
               <img class="table-image" src="${prod.imagen}">
            </td>
            <td class="td-titulo">${prod.nombre}</td>
            <td class="td-precio">${prod.precio}</td>
            <td class="td-stoc">${prod.stoc}</td>git 
             <td class="action"> <button class="borrar" onclick="deleteProd('${prod.id}')">
             <i class="bi bi-trash"></i>
             </button>
              <button class="editat">
              <i class="bi bi-pen"></i>
             </button>
             </td>
  </tr>
  
  

  
  `

} )



}
renderProd(prod)

function inputSerch(evt){
    console.log(evt.target.value)
    const serch =  evt.target.value.toLowerCase();

    const filteredProd = prod.filter((prod) => {

        if(prod.nombre.toLowerCase().includes(serch)){
            return true
        }
        return false

    } )

    renderProd(filteredProd)
}

function deleteProd(idProd){
  const indice = prod.findIndex((prod) =>  {
    if(prod.id === idProd){
        return true
    }
  })  
  prod.splice(indice, 1)
  renderProd(prod)
}


 