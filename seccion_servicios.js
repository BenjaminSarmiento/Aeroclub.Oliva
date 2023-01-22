const secciones= [
    {titulo: "Vuelos bautismo", img: "../img/vuelo-bautismo.jpg", descripcion: "Hacer un vuelo de bautismo significa volar por primera vez, pero no necesariamente por vez primera en toda la vida, sino que también es posible hacer un vuelo de bautismo en un pequeño avión como EL TECNAM P92 que dispone el aeroclub. ", boton: "inscribirse"},
    {titulo: "Vuelos privados", img: "../img/vuelo-privado.jpg",descripcion: "El servicio de Avión Privado, consiste en rentar aeronaves para realizar vuelos de forma privada. Contar con un servicio de esta magnitud es ideal en diferentes circunstancias en las que se requieren soluciones de transporte rápidas, exclusivas y ajustadas a las necesidades del cliente, en esta seccion tmabien se incluyen vuelos fotograficos y de investigacion.", boton: "inscribirse"},
    {titulo: "Hangaraje", img: "../img/imagen-hangar.jpg",descripcion: "Ofrecemos un servicio de hangaraje en nuestros propios hangares en el aeroclub oliva, situado en Ruta nacional 9 KM 608, Oliva, Cordoba. Poseemos 3 hangares para el alojamiento de aeronaves de diversos tamaños. Asegurando ante todo la seguridad de las aeronaves y su cuidado, tomando todas las medidas correspondientes. ", boton: "inscribirse"},
    {titulo: "Planeadores", img: "../img/vuelo-planeador.jpg",descripcion: "El vuelo a vela es un deporte en el que los pilotos al mando de planeadores (aeronave sin motor) vuelan aprovechando las corrientes de aire ascendente (térmicas, dinámicas, ondas) para mantenerse en el aire y, si lo desea, recorrer grandes distancias, tal como lo hacen los pájaros. Podes realizar tu vuelo bautismo en uno de nuestros planeadores o comenzar el curso de vuelo a vela.", boton: "inscribirse"},
    ]

    let contenedorSeccionServicios = document.getElementById("contenedorSeccionServicios")

    renderizarCards(secciones)

 function renderizarCards(arraySecciones) {
  contenedorSeccionServicios.innerHTML= ' '
  for (const seccion of arraySecciones) {
      let tarjetaSecciones = document.createElement("div")
      tarjetaSecciones.innerHTML = `
        <img class="imagenSeccionServicios" src=${seccion.img}>
        <div class="textoSeccionServicios">
        <h2 class="tituloSeccionServicios"><strong>${seccion.titulo}</strong></h2>
        <p class="descripcionSeccionServicios"> ${seccion.descripcion}</p>
        <a href="http://wa.me/5493512008375" target="_blank" class="botonSeccionServicios"> ${seccion.boton}</a>
        </div>
        `
        
      contenedorSeccionServicios.append(tarjetaSecciones)
      contenedorSeccionServicios.className ="seccionesServicios"
      tarjetaSecciones.className= "seccion"
    }
}