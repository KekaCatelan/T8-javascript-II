const objeto= {
    nome:'Raquel',
    profissao:'Profissão: Produtora Audiovisual, fotogarafa e Desenvolvedora',
    idade: '25',
    signo: 'Libra',
    site: 'http://raquelpermarcat.wixsite.com/portfolio',
    'minha-face':'https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e15/s320x320/67411218_325113801732484_7263301287052795767_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=104&oh=a01d54ec76a054d7d9d58356f73ea142&oe=5DFF48F3&ig_cache_key=MjA5MDA5NTExNzk4MjI2MTg0Nw%3D%3D.2'

}

const nome = document.createElement('h2')
const mae = document.getElementById("sou-a-mae")
mae.appendChild(nome)
nome.textContent='Nome:Raquel'
// ou objeto.nome ou objeto['nome']


const profissao =  document.createElement('p')
mae.appendChild(profissao)
profissao.textContent= 'Profissão: Produtora Audiovisual, fotogarafa e Desenvolvedora'
// ou objeto.profissao objeto['profissao']

const idade =  document.createElement('span')
mae.appendChild(idade)
idade.textContent= 'Idade:25'
// ou objeto.idade objeto['idade']

const signo =  document.createElement('h3')
mae.appendChild(signo)
signo.textContent= 'Signo:Libra'
// ou objeto.signo objeto['signo']



// for (let propriedade in objeto){
//     // objeto[propriedade]
//     let dados = document.createElement('p')
//     mae.appendChild(dados)
//     dados.textContent= objeto[propriedade]
// }

const site =  document.createElement('a')
mae.appendChild(site)
site.textContent = 'Portfolio'
site.setAttribute('href' , 'http://raquelpermarcat.wixsite.com/portfolio') 
site.setAttribute('target' , '_blank')
// ou objeto.site objeto['site']

const imagem = document.createElement('div')
const segundaMae = document.querySelector('.conteudo')



const minhaFace = document.createElement('img')
segundaMae.appendChild(minhaFace)
minhaFace.setAttribute('src', objeto['minha-face'])
minhaFace.setAttribute('alt' , 'menina com fone de ouvido' )
