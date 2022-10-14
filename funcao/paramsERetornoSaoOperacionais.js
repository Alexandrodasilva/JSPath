function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`${area}`)
    }else{
        return console.log(`${area}`)
    }
}
//console.log(area(2,2)
// o segundo vai como undefined, ret NaN
//console.log(area(2))
//console.log(area())
console.log(area(2,3,17,22,44))
//console.log(area(5,3))