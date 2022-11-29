let dobro = function (a){
    return 2*a
}
//caracteristica importante da arow function  é sempre uma função anonima, tem que armazenar ela
// em alguma variavel
dobro = (a) => {
    return 2 *a

}
// quando tirar as chaves tira o corpo da função 
// quando retirar as chaves o retorno é implícito,
dobro = a => 2 * a 

console.log(dobro(Math.PI))

let ola = function(){
    return 'ola'
}
 // dois exemplos de como pode fazer uma array function sem parametros
ola = () => 'ola' // sem o paretesens ou anderlaine fica com a sintaxe errada
ola = _ => 'ola' // possui um param válido 
console.log(ola())

function Pessoa(){
    this.idade = 0

    setInterval(() =>{
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa