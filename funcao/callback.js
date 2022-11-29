<<<<<<< HEAD
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice +1}.${nome}`)
}

fabricantes.forEach(imprimir)
// fabricantes.forEach(function(a){
//     console.log(a)
// })
fabricantes.forEach(fabricantes => console.log(fabricantes))
=======
//Função Callback
//Uma função callback é uma função passada a outra função como argumento, 
//que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

const fabricantes = ["Mercedes", "BMW", "Audi"]
//arrow function
const imprimir = (nome, indice) => console.log(`${indice + 1}.${nome}`)

//function imprimir(nome, indice){
//    console.log(`${indice + 1}.${nome}`)
//}

fabricantes.forEach(imprimir);

//sem callback

const fabricantes1 = ["Mercedes", "BMW", "Audi"]

for(let i in fabricantes1){
    console.log(`${i}.${fabricantes[i]}`)
}
>>>>>>> 13546f72398c0824ffaeaec0f952d3e67b29aada
