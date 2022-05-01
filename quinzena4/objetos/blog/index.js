const dadosPost = {}

const criarPost = () => {
    const inputTitulo = document.getElementById("titulo-post")
    const inputAutor = document.getElementById("autor-post")
    const inputConteudo = document.getElementById("conteudo-post")
    dadosPost.titulo = inputTitulo.value
    dadosPost.autor = inputAutor.value
    dadosPost.conteudo = inputConteudo.value
    console.log(dadosPost)

    const container = document.getElementById("container-de-posts")

    container.innerHTML += `<div> <h1>Título: ${dadosPost.titulo}</h1> <h6>Auto: ${dadosPost.autor}</h6> <p>${dadosPost.conteudo}</p></div>`
    inputTitulo.value = ""
    inputAutor.value = ""
    inputConteudo.value = ""
}
