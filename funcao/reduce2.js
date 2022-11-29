const alunos = [
    {nome: "joao", nota: 7.3, bolsista: false},
    {nome: "maria", nota: 9.2, bolsista: true},
    {nome: "jose", nota: 9.8, bolsista: false},
    {nome: "pedro", nota: 8.7, bolsista: true}
]

//Desafio 1: Todos os alunos é bolsista?
const todoBolsista = (resultado, bolsista) => resultado && bolsita
console.log(alunos.map(a=>a.bolsista).reduce(todoBolsista))

// resultado é o acumulado e bolsista é o proxim, então sempre vai haver se os dois é true 
//Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado,bolsista) => resultado || bolsista // vai aculando e haver 
//algum bolsista false, vai retorna uma false
console.log(alunos.map(p=>p.bolsista).reduceRight(algumBolsista))