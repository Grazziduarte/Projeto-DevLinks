function toggleMode() {
  const hmtl = document.documentElement
  hmtl.classList.toggle("light")
  //aqui falamos, que no docum.html na lista de Class contém light. SIM. O toggle faz sozinho, ele verifica se tiver o light ele tira, se não tiver o light ele coloca.//
  

  //pegar a tag img//
  const img = document.querySelector("#profile img")

  //substituir a imagem//
  if (hmtl.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/assets/avatar.png")
  }
  
}

