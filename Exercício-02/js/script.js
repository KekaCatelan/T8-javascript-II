// Quando clicar no gato ele desaparece
// se clicar de novo ele aparece pra amanha 




// const gatos= document.getElementsByClassName('lista_gatos')

// for (let i=0; i<gatos.length; i++){
//     const item= document.createElement('item_imagem')

// }


// ou

const muitosGatos= document.querySelectorAll(".item__imagem")

muitosGatos.forEach(function(gato){
    gato.addEventListener('click' , function(evento) {
        evento.target.classList.add('invisivel')
        // gato.classList.add('minha-classe')
   })
})


