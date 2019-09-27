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

const naveMae = document.getElementById('lista-do-catalogo')

for(let propriedade in livros){
    const meuLivro  = document.createElement('li')
    naveMae.appendChild(meuLivro)
    meuLivro.classList.add('livro')

    const tituloLivro = document.createElement('h2')
    meuLivro.appendChild(tituloLivro)
    tituloLivro.textContent= livros[propriedade]['titulo']
    tituloLivro.classList.add('livro__titulo')
   
    const autor= document.createElement('p')
    meuLivro.appendChild(autor)
    autor.textContent= livros[propriedade]['quemEscreveu']
    autor.classList.add('livro__autoria')

    const link = document.createElement('a')
    meuLivro.appendChild(link)
    link.setAttribute('href' , livros[propriedade]['link'])
    link.setAttribute('target' , '_blank')
    link.textContent = 'Leia Aqui'
    link.classList.add('livro__link')

    const botao = document.createElement("BUTTON");
    meuLivro.appendChild(botao)
    botao.textContent = 'Marcar como lido'
    botao.classList.add('botao-lido')

    // const botaoCancelar = document.createElement("BUTTON")
    // meuLivro.appendChild(botaoCancelar)
    // botaoCancelar.textContent= 'Desfazer'
    // botaoCancelar.classList.add('botao-desfazer')

    botao.addEventListener('click' , function(evento) {
        
    if(tituloLivro.classList.contains('livro__titulo--lido')){
        tituloLivro.classList.remove('livro__titulo--lido')
        botao.textContent='Marcar como lido'
        botao.classList.add('botao-lido')

        botao.classList.remove('botao-lido__vermelho')
        
        
    }else{
        tituloLivro.classList.add('livro__titulo--lido')
        botao.textContent='Lido'
        botao.classList.add('botao-lido__vermelho')

        
    }
    
    })

    // botaoCancelar.addEventListener('click' , function(evento){
    //     if(tituloLivro.classList.contains('livro__titulo--lido')){
    //         tituloLivro.classList.remove('livro__titulo--lido')
    //         botao.textContent= 'Já Li'
    //         botao.classList.remove('botao-lido__vermelho')
        
    //     }else{
    //         tituloLivro.classList.add('livro__titulo--lido') 
           
    //     }
    // })

}




