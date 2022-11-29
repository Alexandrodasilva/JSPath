// VAR, LET and CONST
// o var tinha escopo de função ou escopo global
// já o let tem escopo de bloco
{
    var a = 2
    let b = 3
}
// var não tem escopo de bloco 
// já o b esta no escopo do bloco e não de um globl
//console.log(b) // não funciona

//template String
const produto = 'ipad'
console.log(`${produto} é  
caro!`)

//Destructuring
const [l, e, ...trans] = "cod3r" // os tês ponto traz o restante do que falta na string em array string

console.log(l, e, trans)

const [x, y] = [1,2,3]
console.log(x,y)

//arrow function 
const soma = (a,b) => a+b
// como uma arrow function é uma função anonima () => 
// criar a funação e atribui ela a uma variavel/constante, daí consegue invocar ela 
console.log(soma(2,3))

// operador rest 
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2,3,4,5))