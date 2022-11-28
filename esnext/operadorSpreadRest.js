//operador ... rest(juntar)/spread(espalhar)
//usar o rest com parametro  de função 

//usar spread com objeto
const funcionario = {nome:'Maria',salario: 12345.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ['joao', 'pedro', 'mlk']
const grupoFinal = ['maria', ...grupoA, 'rafaela']
console.log(grupoFinal)