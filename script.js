
const cards= [
{titulo: "Vuelos bautismo", img: "../img/servicios-1-removebg-preview.png",},
{titulo: "Vuelos privados", img: "../img/servicios-6.png",},
{titulo: "Escuela de vuelo", img: "../img/servicios-3-removebg-preview.png",},
{titulo: "Hangaraje", img: "../img/servicios-4-removebg-preview.png",},
{titulo: "Planeadores", img: "../img/servicios-7.png",},
]
const cursos= [
{titulo: "Vuelos bautismo", img: "../img/servicios-1-removebg-preview.png",},
{titulo: "Vuelos privados", img: "../img/servicios-6.png",},
{titulo: "Escuela de vuelo", img: "../img/servicios-3-removebg-preview.png",},
{titulo: "Hangaraje", img: "../img/servicios-4-removebg-preview.png",},
{titulo: "Planeadores", img: "../img/servicios-7.png",},
]
const comentarios= [
{nombre: "Benjamin Sarmiento", profesion: "Estudiante piloto privado", img: "../img/testimonio1.jpg",comentario: "Estoy muy contento de formar parte del aeroclub, la calidad de personas y profesionales que hay en este club es inimaginable. Entre pilotos y alumnos se forman amistades, compartiendo todos la misma pasion"},
{nombre: "Benjamin Sarmiento", profesion: "Piloto privado", img: "../img/testimonio1.jpg",comentario: "Estoy muy contento de formar parte del aeroclub, la calidad de personas y profesionales que hay en este club es inimaginable. Entre pilotos y alumnos se forman amistades, compartiendo todos la misma pasion"},
{nombre: "Benjamin Sarmiento", profesion: "Instructor", img: "../img/testimonio1.jpg",comentario: "Estoy muy contento de formar parte del aeroclub, la calidad de personas y profesionales que hay en este club es inimaginable. Entre pilotos y alumnos se forman amistades, compartiendo todos la misma pasion"},
]
let contenedorCards = document.getElementById("contenedorCards")
let testimonios = document.getElementById("testimonios")
let informacionCursos = document.getElementById("informacionCursos")


renderizarCards(cursos)

 function renderizarCards(arrayCursos) {
  informacionCursos.innerHTML= ' '
  for (const curso of arrayCursos) {
      let tarjetaCurso = document.createElement("button")
      tarjetaCurso.innerHTML = `
      <img class="imagenCard" src=${curso.img}>
      <h2 class="tituloCard"><strong>${curso.titulo}</strong></h2>
      `
      informacionCursos.append(tarjetaCurso)
      informacionCursos.className ="cursos"
      tarjetaCurso.className= "curso"
    }
}
renderizarCards(cards)

 function renderizarCards(arrayCards) {
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
  testimonios.innerHTML= ' '
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
      testimonios.append(tarjetaComentarios)
      testimonios.className ="comentarios"
      tarjetaComentarios.className= "comentario"
    }
}