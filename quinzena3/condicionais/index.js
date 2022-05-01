/* 
    Exercícios de Interpretação de Código
    
    1- o programa pede um número ao usuário e armazena em uma variável,
    depois ele cria outra variavel onde ele transforma o tipo da variavel anterior de string para numero,
    dentro do 'if' ele divide a variavel numero por 2, pegando o resto e verificando se é igual a 0,
    caso seja igual a 0, ou seja, um número par, ele notifica que o numero passou no teste,
    caso não seja, ou seja, um número ímpar, ele notifica que o numero nao passou no teste.

    2- 
    a) O programa serve para precificar a fruta escolhida pelo usuário.
    b) "O preço da fruta Maçã é R$ 2.25"
    c) "O preço da fruta Pêra É R$ 5.5"

    3- 
    a) Pedindo ao usuário que digite o 'primeiro número' e armazenando em uma variável,
    ao mesmo tempo que muda o tipo de string para numero
    b) No caso do usuário colocar o '10', seria impresso:
        Esse numero passou no teste
    No caso do usuário colocar '-10', seria impresso um erro dizendo que a variavel 'mensagem' nao foi definida
    c) Sim, haveria uma mensagem de erro, o motivo se deve porque a variavel foi definida dentro do filho
*/

// Exercícios de Escrita de Código

// 4-
/*
const age = Number(prompt("Digite a sua idade."))
if (age >= 18) {
    console.log ("Você pode dirigir! =]")
} else {
    console.log ("Você não pode dirigir. =[")
}
*/
// 5-
/*
const period = prompt("Qual período você estuda? Digite: M para matutino, V para vespertino ou N para noturno.")
if (period === "M") {
    console.log ("Bom dia!")
} else if (period === "V") {
    console.log ("Boa tarde!")
} else if (period === "N") {
    console.log ("Boa noite!")
}
*/
// 6-
/*
const period = prompt("Qual período você estuda? Digite: M para matutino, V para vespertino ou N para noturno.")
switch (period) {
    case "M":
        console.log ("Bom dia!") 
        break;
    case "V":
        console.log ("Boa tarde!") 
        break;
    case "N":
        console.log ("Boa noite!") 
        break; 
    default:
        console.log ("Não é um período válido")
        break;
}
*/
// 7-
/*
const movieGenre = prompt("Digite o gênero do filme (Ex. Fantasia, Ação, Romance)")
const ticketPrice = Number(prompt("Qual o valor do ingresso? (Utilize apenas números)"))
let genreOk
let priceOk
if (movieGenre === "Fantasia") {
    genreOk = true
} else {
    genreOk = false
}

if (ticketPrice <= 15) {
    priceOk = true
} else {
    priceOk = false
}

if (genreOk && priceOk) {
    let askSnack = prompt("Digite um snack para comprar")
    console.log ("Bom filme!")
    console.log ("... com " + askSnack)
} else {
    console.log ("Escolha outro filme :(")
}
*/