/* 
    Exercícios de Interpretação de Código
    
    1- ele primeiro define a variavel 'valor',
        depois faz um loop com o for
        cria uma variavel 'i' com valor inicial 0, que enquanto for menor que 5, soma 1 ao valor de 'i'
        depois disso ele adiciona 'i' a variavel 'valor' e por fim mostra no console
        O que será impresso deve ser apenas o numero '4'

    2- a) serão impresso os valores: 19, 21, 23, 25, 27, 30
        b) eu acredito que seria sim suficiente, mas eu nao entendi a continuação da pergunta, do que pode ser usado

*/

// Exercícios de Escrita de Código

// 3-
let arrayOriginal = [3,4,5,6,7,8,9,2]

// a)
let index

for (let index of arrayOriginal) {
    console.log (index)
}

// b)
for (let index of arrayOriginal) {
    console.log (index /10)
}

// c)
let arrayNovo = []

for (let index of arrayOriginal) {
    if (index%2 === 0){
        arrayNovo.push(index)
    }
}
for (let i of arrayNovo) {
    console.log (i)
}

// d)
for (i = 0; i < arrayOriginal.length; i++) {
    let arrayTerceiro = ["O elemento do índex ", i, "é: ", arrayOriginal[i]]
        console.log (arrayTerceiro)
    
} 

// e)
let numMaior = 0
let numMenor = arrayOriginal[0]

for (i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] > numMaior) {
        numMaior = arrayOriginal[i]
    }
}

for (i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] <= numMenor) {
        numMenor = arrayOriginal[i]
    }
}

console.log ("O maior número do array é " + numMaior + " e o menor é " + numMenor + ".")