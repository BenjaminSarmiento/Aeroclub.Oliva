const cursos= [
    {titulo: "licencia de piloto privado de avion", descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis, ametaspernatur sed eaque cum delectus laboriosam el ex? <br> Accus doloribus corrupti iusto laborditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quasi laborum esse tempora recusandae pariaturin quos rerum mollitia? Facere culpa porro ut <br> aliquam assumenda illo hic, eos sequi.Lorem ipsum dolor sit amet consectetur,nam, non amet cupiditate ratione est sunt deserunt <br>ipsum alias laudantium molestias quia pariatur error architecto, reiciendis ea ullam praesentium laboriosam.",
  requisitosDeAdmision: "Tener 17 años de edad al momento de rendir el examen."},
    {titulo: "licencia de piloto comercial de avion", descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis, ametaspernatur sed eaque cum delectus laboriosam el ex? Accus doloribus corrupti iusto laborditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quasi laborum esse tempora recusandae pariaturin quos rerum mollitia? Facere culpa porro ut <br> aliquam assumenda illo hic, eos sequi.Lorem ipsum dolor sit amet consectetur,nam, non amet cupiditate ratione est sunt deserunt <br>ipsum alias laudantium molestias quia pariatur error architecto, reiciendis ea ullam praesentium laboriosam.",
    requisitosDeAdmision: "Ser piloto privado de avion y contar con 200hs de vuelo."},
    {titulo: "licencia de instructor de vuelo de avion", descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis, ametaspernatur sed eaque cum delectus laboriosam el ex? Accus doloribus corrupti iusto laborditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quasi laborum esse tempora recusandae pariaturin quos rerum mollitia? Facere culpa porro ut <br> aliquam assumenda illo hic, eos sequi.Lorem ipsum dolor sit amet consectetur,nam, non amet cupiditate ratione est sunt deserunt <br>ipsum alias laudantium molestias quia pariatur error architecto, reiciendis ea ullam praesentium laboriosam.",
    requisitosDeAdmision: "Tener la licencia de piloto comercial de avion."},
    {titulo: "licencia de piloto planeador", descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis, ametaspernatur sed eaque cum delectus laboriosam el ex? Accus doloribus corrupti iusto laborditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quasi laborum esse tempora recusandae pariaturin quos rerum mollitia? Facere culpa porro ut <br> aliquam assumenda illo hic, eos sequi.Lorem ipsum dolor sit amet consectetur,nam, non amet cupiditate ratione est sunt deserunt <br>ipsum alias laudantium molestias quia pariatur error architecto, reiciendis ea ullam praesentium laboriosam.",
    requisitosDeAdmision: "Tener 17 años de edad al momento de rendir el examen."},
    ]


    let contenedorCursos = document.getElementById("contenedorCursos")

    renderizarCards(cursos)

 function renderizarCards(arrayCursos) {
  contenedorCursos.innerHTML= ' '
  for (const curso of arrayCursos) {
      let tarjetaCursos = document.createElement("div")
      tarjetaCursos.innerHTML = `
      <h2 class="tituloCursos"><strong>${curso.titulo}</strong></h2>
      <p class="descripcionCursos"> ${curso.descripcion}</p>

      <div class="contenedorRequisitosAdmision">
        <h3 class="tituloRequisitosAdmision">requisitos de admision</h3>
        <div class= "contenedorTextoRequisitosAdmision">
        <i class="fa-solid fa-plane"></i>
        <p class="descripcionRequisitosAdmision">${curso.requisitosDeAdmision}</p>
        <div/>
    </div>
        `
        
      contenedorCursos.append(tarjetaCursos)
      contenedorCursos.className ="cursos"
      tarjetaCursos.className= "curso"
    }
}