// Percorrer Array:
// Criar uma li 
// Colocar Conteudo 
// Capturar ul 
// Inserir 'li' na 'ul'

const alunas = ['Raquel Catelan', 'Talita Barbosa' , 'Lia Lobo' , 'Daiane Moraes', 'Angelica Garcia', 'Simara Conceição', 'Simone Santos', 'Monique Almeida', 'Priscila Alves']

const mae= document.getElementById('lista-alunas')
// se eu colocar a variavel mae dentro do for daria certo do mesmo jeito, mmas gastaria mais memoria do computador


for ( let i=0; i<alunas.length; i++){
const lista= document.createElement('li')
lista.textContent= alunas[i]
mae.appendChild(lista)

}

// // isso é um evento
// let soma= 0  
// const meuTitulo = document.querySelector('.titulo')
// meuTitulo.addEventListener('click',  function logar(){
// console.log(soma++)

// })
const meuTitulo = document.querySelector('.titulo')
meuTitulo.addEventListener('click', function(){
    meuTitulo.classList.add('vermelha')
}) 



const meuSubTitulo = document.querySelector('.subtitulo')
 meuSubTitulo.addEventListener('click', function logar(){
     console.log(soma++)
 } )

// ou

// alunas.forEach(function(aluna){
//     const lista= document.createElement('li')
// lista.textContent= aluna
// mae.appendChild(lista)
// })


