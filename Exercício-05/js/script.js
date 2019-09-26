const livros = {
    1: {
        "titulo": "JavaScript Eloquente",
        "quemEscreveu": "Marijn Haverbeke",
        "link": "https://github.com/braziljs/eloquente-javascript"
    },
    2: {
        "titulo": "Você não sabe JS",
        "quemEscreveu": "Kyle Simpson",
        "link": "https://github.com/cezaraugusto/You-Dont-Know-JS"
    },
    3: {
        "titulo": "Calibã e a Bruxa: mulheres, corpo e acumulação primitiva",
        "quemEscreveu": "Silvia Federici",
        "link": "http://coletivosycorax.org/wp-content/uploads/2019/09/CALIBA_E_A_BRUXA_WEB-1.pdf"
    }
}

for(let propriedade in livros){
    const naveMae = document.getElementById('lista-do-catalogo')
    const tituloLivro = document.createElement('h2')
    naveMae.appendChild(tituloLivro)
    tituloLivro.textContent= livros[propriedade]['titulo']
    const autor= document.createElement('p')
    naveMae.appendChild(autor)
    autor.textContent= livros[propriedade]['quemEscreveu']
    const link = document.createElement('a')
    naveMae.appendChild(link)
    link.setAttribute('href' , livros[propriedade]['link'])
    link.setAttribute('target' , '_blank')
    link.textContent = 'Leia Aqui'

}




