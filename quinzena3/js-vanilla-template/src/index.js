/*
    Exercícios de interpretação de código
    1-  primeiro será impresso:
        10
        depois será impresso:
        10, 5

    2- será impresso:
        20, 20, 20
*/

// Exercícios de escrita de código
// 1- 
// a-

let nome

// b-

let idade

// c-

console.log (typeof nome)
console.log (typeof idade)

// d- Foi impresso 'undefined', porque não existe um valor atribuido (undefined = indefinido/não definido)

let askName = prompt("Qual seu nome?")
nome = askName

let askAge = prompt("Qual sua idade?")
idade = askAge

// e-

console.log (typeof nome)
console.log (typeof idade)

// Notei que ambos são classificados como string, mesmo tendo um número inteiro sem letras em 'idade'

// f- (obs.: no slide não mostra como juntar um texto com variáveis, 
//    esses '+' que tive de colocar para funcionar precisei achar na internet, sem eles dava erro.)

console.log ('Olá', nome, ', você tem', idade, 'anos.')

// 2- 

const endereco = "Qual seu endereço?"
const cor = "Qual sua cor favorita?"
const serie = "Qual sua série favorita?"
const comida = "Qual sua comida favorita?"
const lugar = "Qual é o melhor lugar do mundo para você?"

let askAdress = prompt(endereco)
let askColor = prompt(cor)
let askShow = prompt(serie)
let askFood = prompt(comida)
let askPlace = prompt(lugar)

const answer = "Respota: "

console.log ("1 - ", endereco, answer, askAdress)
console.log ("2 - ", cor, answer, askColor)
console.log ("3 - ", serie, answer, askShow)
console.log ("4 - ", comida, answer, askFood)
console.log ("5 - ", lugar, answer, askPlace)

// 3- 

let favorites = ["nhoque", "chocolate", "coca cola", "pizza", "torta de limão"]

// a-

console.log (favorites)

// b-

console.log ("Estas são minhas comidas favoritas:")
console.log (favorites [0])
console.log (favorites [1])
console.log (favorites [2])
console.log (favorites [3])
console.log (favorites [4])

// c-
// não sei/nao aprendi em aula ainda

// 4-

let questions = ["vc está de azul?", "vc é verde?", "vc tem laranja?"]

// a-

let answer4 = [true, false]

// b-

console.log (questions[0], answer4[1])
console.log (questions[1], answer4[0])
console.log (questions[2], answer4[1])