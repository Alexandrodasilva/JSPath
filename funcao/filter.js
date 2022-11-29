const produtos =[
    {nome: "notebook", preco: 2499, fragil: true},
    {nome: "ipad pro", preco: 4199, fragil: true},
    {nome: "copo de vidro", preco: 12.49, fragil: true},
    {nome: "copo de plastico", preco: 18.99, fragil: false}
]

const prod = p => true
const fragil = p => p.fragil
const caro = p => p.preco >= 500

console.log(produtos.filter(fragil).filter(caro))