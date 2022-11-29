const carrinho = [
    '{"nome":"Borracha", "preço":3.45, "cor":"verde"}',
    '{"nome":"Caderno", "preço":13.90, "cor":"azul"}',
    '{"nome":"Kit de lápis", "preço":41.22, "cor":"preto"}',
    '{"nome":"Caneta", "preço":7.50, "cor":"marrom"}',
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.cor

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
//objetivos dessa classe é fazer uma selecao do preço e cor