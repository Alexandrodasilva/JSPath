//Funcão em js é first-class Object (Citizens)
// Higher-order function

// Criar de forma literal
function fun1(){
    return(console.log("passou pelo fun1"))
}
fun1()
// Armazenar em uma variável 
const fun2 = function () { }

// Armazenar em um array 
const array = [function(a, b){return(a+b)}, 123 ]
console.log(array[0](2, 3))
console.log(array[1])

// Armazenar em um atributo de objeto 
const obj = {}

obj.falar = function () {return 'opa'}

console.log(obj.falar())

// passar funcao como paramentro
function run(fun){
    fun()
}

run( function (){console.log('Executando....')})

//Uma função pode retornar/conter uma função

function soma(a,b){
    return function(c){
        //console.log(a+b+c)
        return function(d){
            console.log(a+b+c+d)
        }
    }
}

soma(2,3)(4)(4)
const cincoMais = soma(2,3)
cincoMais(4)(4)