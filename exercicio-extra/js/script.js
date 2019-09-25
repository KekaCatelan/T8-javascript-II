const formulario = document.getElementById('formulario-de-comentarios')
const mae = document.getElementById('todos-os-comentarios')
const erro =document.querySelector('.erro-vermelho') 
// addEventListener escuta a ação que o elemento irá fazer 
// submit em string é o tipo do evento
// evento é o parametro da funcao


formulario.addEventListener('submit', function(evento) {
    evento.preventDefault()
    let input = document.querySelector('.input-de-texto')
    let mensagem = input.value.trim()


    if (mensagem === "") {
        // input.classList.add('erro-Vermelho')
        // let caixaFormulario = document.getElementById('formulario-de-comentarios')
        // let deuRuim = document.createElement('p')
        // caixaFormulario.appendChild(deuRuim)
        // deuRuim.textContent = 'Ops! Isso não é uma mensagem'
        // // deuRuim.classList.add('erro-Vermelho')
        // esse buga tudo

        erro.textContent='Escreva algo, senhora!'
     

    } else {
        erro.textContent=''

        let comentario = document.createElement('p')
        comentario.textContent = mensagem
        mae.appendChild(comentario)

        comentario.classList.add('comentario')
      }
      formulario.reset()
      // ou input.value = ''

    })

    

    // console.log(input)
    // console.log(mensagem)








// getElementsByClassName vai criar uma array
    // querySelector vai retornar o primneiro elemento