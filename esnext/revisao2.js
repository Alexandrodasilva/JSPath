//ES8: Object.values/object.entries
const obj = {a:1, b:2, c:3}
console.log(Object.keys(obj))
console.log(Object.values(obj)) // traz o valor que esta dentro do objeto
console.log(Object.entries(obj)) // traz uma matriz, uma array de array. OU seja traz arrays chave valor

//Melhorias na Notação Literal 
const nome = 'amor'
const pessoa = {
    nome,
    ola(){
        return 'oi Gente'
    }
}

console.log(pessoa.nome, pessoa.ola())

class Animal{}
class Cachorro extends Animal{
    falar(){
        return  'au au'
    }
} 

console.log(new Cachorro().falar()) // istanciando 

