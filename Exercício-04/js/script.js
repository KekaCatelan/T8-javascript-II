let pinguim = {
    'nome': 'Frida',
    'idade': 15,
    'origem': 'Groelandia'

}

pinguim.andar=function(){
console.log('Andou')
}

pinguim.podeVoar = false

pinguim.voar=function() {
    if(this.podeVoar){
        console.log('Voou')
    } else{
        console.log('Frida não voa ainda')
    }
}