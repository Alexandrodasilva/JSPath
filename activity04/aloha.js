let valores = [2, 1, 8, 9, 4, 7]
valores.push(5)  //adiciona  mais um valor na array
valores.sort        // ordena toda array em ordem crescente
console.log(valores)        //  mostra todo valores da rray
let pos = valores.indexOf(8)        // procura o elemento 8 na array

if(pos == -1){                                 //  se não encontrar o elemento 8, entra nesse if
    console.log('o valor não foi encontrado')
}else{
    console.log(`o valor esta na posição ${pos}`)
}

    for(let pos = 0;  pos < valores.length; pos++){
            console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
    }

    for(let pos in valores){
        console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
    }

    /*while(let pos < valores){
        console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
        pos++
    }*/
