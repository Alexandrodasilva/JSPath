let dobro = function (a){
    return 2*a
}

dobro = (a) => {
    return 2 *a

}

dobro = a => 2 * a // return implícito

console.log(dobro(Math.PI))

let ola = function(){
    return 'ola'
}

ola = () => 'ola'
ola = _ => 'ola' // possui um param
console.log(ola())

function Pessoa(){
    this.idade = 0

    setInterval(() =>{
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa