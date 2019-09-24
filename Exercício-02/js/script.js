// Quando clicar no gato ele desaparece
// se clicar de novo ele aparece pra amanha 




// const gatos= document.getElementsByClassName('lista_gatos')

// for (let i=0; i<gatos.length; i++){
//     const item= document.createElement('item_imagem')

// }


// ou

const muitosGatos= document.querySelectorAll(".item__imagem")

// muitosGatos.forEach(function(gato){
//     gato.addEventListener('click' , function(evento) {
//         if( evento.target.classList.contains('invisivel')){
//             evento.target.classList.remove('invisivel')
//         } else{
//             evento.target.classList.add('invisivel')
//         }
       
//    })
// })


muitosGatos.forEach(function(gato){
    gato.addEventListener('click' , function(evento) {
        if(gato.classList.contains('invisivel')){
            gato.classList.remove('invisivel')
        } else{
            gato.classList.add('invisivel')
        }
       
   })
})



