// pomise é quando ter um processo assícrono. ser atendidada ou a pomise não ser atendida, ou seja atendida ou rejeitada
//

function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) // passando o objeto
        }, segundos * 1000)
    })
}
let number = [1,2,3,4,5]
falarDepoisDe(3, number)
   // .then(frase => { return frase.concat('?!?')})
   // .then(outraFrase => console.log(outraFrase))
    .then(e => console.log(e))
    .catch(e => console.log(e))