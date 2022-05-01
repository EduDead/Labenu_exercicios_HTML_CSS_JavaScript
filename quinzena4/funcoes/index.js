/* 
    Exercícios de Interpretação de Código
    
    1- a) 
    10
    50
    b) nada

    2- a) Serão impressos apenas os 3 primeiros nomes do array, já que o index só é permitido ir até o 2 (no caso 0, 1 e2)
    b) Apenas os dois novos nomes seriam impressos

    3- Esse código está pegando os valores de um array, verificando se ele é par, e caso seja coloca ele multiplicado por ele mesmo no novo array
    exemplo: se o número dentro do primeiro array for 4 (par), ele fará 4 * 4 e colocará 16 no novo array
    um nome diferente q explica o que faz poderia ser algo parecido com: parElevadoA2

*/

// Exercícios de Escrita de Código

// 4 -
/*
// a)
const mensagem = () => {
    console.log ("Eu sou Eduardo, tenho 30 anos, moro em Fortaleza e sou estudante.")
}
mensagem()

// b)
const nome = prompt("Qual seu nome?")
const idade = String(prompt("Qual sua idade?"))
const cidade = prompt("Em qual cidade você mora?")
const askEstuda = confirm("Você é estudante?")
const quemSou = () => {
    let confirmEstuda
    if (askEstuda === true) {
        confirmEstuda = " e sou estudante."
    } else {
        confirmEstuda = " e não sou estudante."
    }
    console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + cidade + confirmEstuda)
}
quemSou()
*/
// 5 -
/*
// a)
const sum = (x, y) => {
    return x + y
}
console.log(sum(2, 3))

// b)
const compare = (x, y) => {
    if (x >= y) {
        return true
    }
    return false   
}

console.log (compare(10, 5))

// c)
const repeatTen = (msg) => {
    for (let i = 0; i < 10; i++){
        console.log (String(msg))
    }
}
repeatTen ("Uma mensagem aleatória 10x")
*/
// 6 - 
/*
const arrayTeste = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a)
const quantidade = (array) => {
    console.log (array.length)
}
quantidade (arrayTeste)

// b)
const checkEven = (arrayB) => {
    for (x of arrayB){
        if (x%2 === 0) {
            console.log(x+" é par.")
        } else {
            console.log(x+" não é par.")
        }
    }
}
checkEven (arrayTeste)

// c)
const arrayEven = (arrayC) => {
    let arrayOfEvens = []
    for (x of arrayC){
        if (x%2 === 0) {
            arrayOfEvens.push (x)
        }
    }
    return arrayOfEvens.length
}
console.log (arrayEven (arrayTeste))
*/
// d) ?????

// Desafio
// 1-
/*
const sum = (x, y) => {
    return x + y
}
let testSum = sum(3, 3)

const resultSum = (z) => {
    console.log (z)
}
resultSum (testSum)
*/
// 2-
/*
const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
console.log (numeros)

// a)
const arrayEven = (array) => {
    let EvensXTwo = []
    for (x of array){
        if (x%2 === 0) {
            EvensXTwo.push (x * 2)
        }
    }
    return EvensXTwo
}
console.log ("Números pares do array multiplicados por 2: " + arrayEven(numeros))

// b)
const greaterF = (arrayB) => {
    let greaterV = 0
    for (let i = 0; i < 10; i++){
        if (arrayB[i] > greaterV) {
            greaterV = arrayB[i]
        }
    }
    return greaterV
}
console.log ("O maior número do array é: " + greaterF(numeros))

// c)
const greaterFIndex = (arrayC) => {
    let greaterV = 0
    let index = 0
    for (let i = 0; i < 10; i++){
        if (arrayC[i] > greaterV) {
            greaterV = arrayC[i]
            index = i
        }
    }
    return index
}
console.log ("O index do maior número do array é: " + greaterFIndex(numeros))
*/
// d) ------
