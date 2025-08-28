
const prod =[
    {
        imagen: 'img/almafuerte-.jpg',
        nombre: 'almafuerte:ultimando',
        comprar: 'comprar',
        precio: '$60.000',
        stoc:'0',
        id:'1'
    },
    {
        imagen: 'img/almafuerte-1.jpg',
        nombre: 'almafuerte:trillando la fina',
        comprar: 'comprar',
        precio: '$50.000',
         stoc:'0',
        id:'2'
    },
    {
        imagen: 'img/guns.jpg',
        nombre: 'guns:appetite for destruction',
        comprar: 'comprar',
        precio: '$10.000',
         stoc:'5',
           id:'3'
    },

    {
        imagen: 'img/silider10.jpg',
        nombre: 'almafuerte:toro&pampa',
        comprar: 'comprar',
        precio: '$50.000',
        stoc:'0',
        id:'4'
    },

    
    {
        imagen: 'img/ironmaiden.jpg',
        nombre: 'iron maiden:the number of the best',
        comprar: 'comprar',
        precio: '$100.000',
        stoc:'45',
        id:'5'
    },
    {
        imagen: 'img/trenloco.jpg',
        nombre: 'tren loco:venas de acero',
        comprar: 'comprar',
        precio: '$40.000',
        stoc:'22',
        id:'6'
    },
    {
        imagen: 'img/megadeth-t.jpg',
        nombre: 'megadeth:rust in peace',
        comprar: 'comprar',
        precio: '$100.000',
        stoc:'0',
        id:'7'

    },
    {
        imagen: 'img/metallica.jpg',
        nombre: 'metallica;black&album',
        comprar: 'comprar',
        precio: '$80.000',
        stoc:'2',
        id:'8'

    },
    {
        imagen: 'img/v8-l.jpg',
        nombre: 'v8:luchando por el metal',
        comprar: 'comprar',
        precio: '$76.000',
        stoc:'12',
        id:'9'

    },
    {
        imagen: 'img/alma-2.jpg',
        nombre: 'almafuerte:piedra libre',
        comprar: 'comprar',
        precio:'$88.000',
        stoc:'0',
        id:'10'

    },
    {
        imagen: 'img/nirvana.jpg',
        nombre: 'nirvana:unplugged',
        comprar: 'comprar',
        precio: '$64.000',
        stoc:'1',
        id:'11'

    },
    {
        imagen: 'img/acido-arg.jpg',
        nombre: 'hermetica:acido argentino',
        comprar: 'comprar',
        precio: '$59.000',
        stoc:'4',
        id:'12'

    }
];





const tableHTML = document.getElementById("table-container")
const tableBodyHTML = document.getElementById("table-body")

 

 

 
 renderProd(prod) 
 
 discoFormHTML.addEventListener("submit", (evento) =>{
 
 evento.preventDefault()
       const el = evento.target.elements

       const nuevoDisco = {
        id:crypto.randomUUID,
        imagen: el.imagen.value,
        nombre:el.nombre.value 
       }
        

       prod.push(nuevoDisco)
       renderProductos(prod)
 })
 
 
 

function renderProd(arrayProd){

tableBodyHTML.innerHTML =''


arrayProd.forEach((prod) => {
 
  tableBodyHTML.innerHTML += `   
  

  <tr>
            <td class="td-disco">
               <img class="table-image" src="${prod.imagen}">
            </td>
            <td class="td-titulo">${prod.nombre}</td>
            <td class="td-precio">${prod.precio}</td>
            <td class="td-stoc">${prod.stoc}</td>
             <td class="action" > <button class="borrar" onclick="deleteProd('${prod.id}')">
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
 //aca iba renderProd(prod)

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
  
  if(indice === -1){
    Swal.fire({
      title: 'alerta',
      text:'no se encontro el usuario',
      icon:'warning',

      showConfirmButton: true,
      confirmButtonText:'de acuerdo'
    })
  }
  Swal.fire({
    title:'¿ESTAS SEGURO?',
    text:'vas a eliminar este producto ',
    icon:'warning',
    showCancelButton: true,
    showConfirmButton: true,
    cancelButtonColor:'red',
    confirmButtonColor:'blue',
    confirmButtonText:'eliminar',
    cancelButtonText:'cancelar'


  }).then((result) => {
    if(result.isConfirmed){
     Swal.fire({
       title:'producto eliminado',
        text:'producto eliminado con exito ',
        icon:'succes'
     })
     prod.splice(indice, 1)
    renderProd(prod)
       
    }
  })

 
}
  