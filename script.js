

const cards= [
{titulo: "Vuelos bautismo", img: "../img/servicios-1-removebg-preview.png",},
{titulo: "Vuelos privados", img: "../img/servicios-6.png",},
{titulo: "Hangaraje", img: "../img/servicios-4-removebg-preview.png",},
{titulo: "Planeadores", img: "../img/servicios-7.png",},
]
const comentarios= [
{nombre: "Benjamin Sarmiento", profesion: "Estudiante piloto privado", img: "../img/testimonio1.jpg",comentario: "Estoy muy contento de formar parte del aeroclub, la calidad de personas y profesionales que hay en este club es inimaginable. Entre pilotos y alumnos se forman amistades, compartiendo todos la misma pasion"},
{nombre: "Benjamin Sarmiento", profesion: "Piloto privado", img: "../img/testimonio1.jpg",comentario: "Estoy muy contento de formar parte del aeroclub, la calidad de personas y profesionales que hay en este club es inimaginable. Entre pilotos y alumnos se forman amistades, compartiendo todos la misma pasion"},
{nombre: "Benjamin Sarmiento", profesion: "Instructor", img: "../img/testimonio1.jpg",comentario: "Estoy muy contento de formar parte del aeroclub, la calidad de personas y profesionales que hay en este club es inimaginable. Entre pilotos y alumnos se forman amistades, compartiendo todos la misma pasion"},
]
let contenedorCards = document.getElementById("contenedorCards")
let testimoniosAlumnos = document.getElementById("testimonios")

renderizarCartas(cards)

 function renderizarCartas(arrayCards) {
  contenedorCards.innerHTML= ' '
  for (const card of arrayCards) {
      let tarjetaCards = document.createElement("button")
      tarjetaCards.innerHTML = `
        <img class="imagenCard" src=${card.img}>
        <h2 class="tituloCard"><strong>${card.titulo}</strong></h2>
      `
      contenedorCards.append(tarjetaCards)
      contenedorCards.className ="cards"
      tarjetaCards.className= "card"
    }
}
renderizarTestimonios(comentarios)

 function renderizarTestimonios(arrayComentarios) {
  testimoniosAlumnos.innerHTML= ' '
  for (const comentario of arrayComentarios) {
      let tarjetaComentarios = document.createElement("button")
      tarjetaComentarios.innerHTML = `
      <div class= "headerComentario">
      <img class="imagenComentario" src=${comentario.img}>
      <div class= "titulosComentario">
      <h2 class="nombreComentario"><strong>${comentario.nombre}</strong></h2>
      <small class:"profesionComentario">${comentario.profesion}</small>
      </div>
      </div>
      <h3 class="descripcionComentario">${comentario.comentario}</h3>
      `
      testimoniosAlumnos.append(tarjetaComentarios)
      testimoniosAlumnos.className ="comentarios"
      tarjetaComentarios.className= "comentario"
    }
}


/*addEventListener( 'DOMContentLoaded ', () => {
  const btnMenu =document.querySelector('.btnMenu')
  if ( btnMenu) {
    btnMenu.addEventListener('click', () => {
      const menu =document.querySelector('.menu')
      menu.classList.toggle('show')
    })
  }
  }) */