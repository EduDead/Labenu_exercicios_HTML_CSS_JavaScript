// Exercício de interpretação de código

// 1-
    true
    false
    true
    a) false
    b) false
    c) true
    e) boolean

// 2-
    a) undefined
    b) null
    c) 11
    d) 3
    e) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]


// Exercício de escrita de código

// 1-

const userAge = Number(prompt("Qual sua idade?"))
const friendAge = Number(prompt("Qual idade do seu(sua) melhor amigo(a)?"))
const eTest = userAge > friendAge
let questionAndAnswer = "Sua idade é maior do que a do seu melhor amigo? " + eTest
console.log (questionAndAnswer)

// 2-

const numberEven = Number(prompt("Digite um número par."))
console.log (numberEven % 2)
// o resultado sempre aparece 0, isso se dá porque quando dividimos um número par por outro nunca sobra resto
// nos meus testes o resultado foi sempre 1, mas estou certo de que deve existir alguns numero q deem outro resultado

// 3-

const listaDeTarefas = []
let tarefa1 = prompt("Digite uma tarefa diária!")
listaDeTarefas.push (tarefa1)
let tarefa2 = prompt("Digite uma segunda tarefa diária!")
listaDeTarefas.push (tarefa2)
let tarefa3 = prompt("Digite uma terceira tarefa diária!")
listaDeTarefas.push (tarefa3)
console.log (listaDeTarefas)

let tarefaOk = Number(prompt("Digite o índice da tarefa feita (0, 1 ou 2)"))
listaDeTarefas.splice (tarefaOk, 1)
console.log (listaDeTarefas)

// 4-

let nome = prompt("Qual seu nome?")
let email = prompt("Qual seu email?")
let msg = "O e-mail " + email + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nome + "!"
console.log (msg)
