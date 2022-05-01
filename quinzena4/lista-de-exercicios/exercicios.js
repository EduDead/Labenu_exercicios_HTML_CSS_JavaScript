//Exercício 1

function inverteArray(array) {
   let arrayInvertido
   arrayInvertido = array.slice(0).reverse()
   return arrayInvertido
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   let arrayParesSobreDois = []
   for (i=0; i<array.length; i++){
      if (array[i]%2 == 0){
         arrayParesSobreDois.push(array[i] * array[i])
      }
   }
   return arrayParesSobreDois
} 

//Exercício 3

function retornaNumerosPares (array) {
   let arrayPares = []
   for (i=0; i<array.length; i++){
      if (array[i]%2 == 0){
         arrayPares.push(array[i])
      }
   }
   return arrayPares
}

//Exercício 4

function retornaMaiorNumero(array) {
   let maiorDoArray = 0
   for (i=0; i<array.length; i++){
      if (array[i] > maiorDoArray){
         maiorDoArray = array[i]
      }
   }
   return maiorDoArray
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   const tamanhoArray = array.length
   return tamanhoArray
}

//Exercício 6

function retornaExpressoesBooleanas() {
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2 
   const booleano4 = !booleano3 
   let arrayRespostas = []
   if (booleano1 && booleano2 && !booleano4){
      arrayRespostas.push(true)
   } else {
      arrayRespostas.push(false)
   }
   if ((booleano1 && booleano2) || !booleano3){
      arrayRespostas.push(true)
   } else {
      arrayRespostas.push(false)
   }
   if ((booleano2 || booleano3) && (booleano4 || booleano1)){
      arrayRespostas.push(true)
   } else {
      arrayRespostas.push(false)
   }
   if (!(booleano2 && booleano3) || !(booleano1 && booleano3)){
      arrayRespostas.push(true)
   } else {
      arrayRespostas.push(false)
   }
   if (!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)){
      arrayRespostas.push(true)
   } else {
      arrayRespostas.push(false)
   }
   return arrayRespostas
}

//Exercício 7

function retornaNNumerosPares(n) {
   let arrayTodosPares = [0]
   let x = 0
   for (i=0; i<n-1; i++){
      x += 2
      arrayTodosPares.push(x)
   }
   return arrayTodosPares
}


// Exercício 8

function checaTriangulo(a, b, c) {
   let respostaTriangulo
   if (a === b && b === c) {
      respostaTriangulo = "Equilátero"
   } else if (a === b || b === c || a === c){
      respostaTriangulo = "Isósceles"
   } else {
      respostaTriangulo = "Escaleno"
   }
  return respostaTriangulo
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let maiorNumero = 0
   let maiorDivisivelporMenor = true
   let diferenca = 0
   let menorNumero = 0
   if (num1 > num2) {
      maiorNumero = num1
      menorNumero = num2
   } else {
      maiorNumero = num2
      menorNumero = num1
   }

   if (maiorNumero%menorNumero === 0){
      maiorDivisivelporMenor = true
   } else {
      maiorDivisivelporMenor = false
   }

   if (maiorNumero - menorNumero > 0){
      diferenca = maiorNumero - menorNumero
   }
   return {maiorNumero, maiorDivisivelporMenor, diferenca}
}

// Exercício 10

function segundoMaiorEMenor(array) {
   array.sort(function(a, b) {
      return a - b;
   })
   const segundoMaior = array[array.length - 2]
   const segundoMenor = array[1]
   const arrayOrdenado = [segundoMaior, segundoMenor]
return arrayOrdenado

}

//Exercício 11

function ordenaArray(array) {
   array.sort(function(a, b) {
      return a - b
   })
   return array
}

// Exercício 12

const astrodev = {
   nome: "O Diabo Veste Prada",
   ano: 2006,
   diretor: "David Frankel",
   atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
}

function filmeFavorito() {
   
   return astrodev
}

// Exercício 13

function imprimeChamada() {
   const astrodevDois = {
      ...astrodev,
      atores: ["Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci"]
   }
   return `Venha assistir ao filme ${astrodevDois.nome}, de ${astrodevDois.ano}, dirigido por ${astrodevDois.diretor} e estrelado por ${String(astrodevDois.atores)}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   const dadosRetangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: lado1 * lado2,
   }
   return dadosRetangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   const pessoaAnonima = {
      ...pessoa,
      nome: "ANÔNIMO"
   }
   return pessoaAnonima
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   const arrayAdultos = []
   for (x of arrayDePessoas){
      if (x.idade >= 18){
         arrayAdultos.push(x)
      }
   }
   return arrayAdultos
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   const arrayCrianças = []
   for (x of arrayDePessoas){
      if (x.idade <= 18){
         arrayCrianças.push(x)
      }
   }
   return arrayCrianças
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   const arrayVezesDois =[]
   for (x of array){
      arrayVezesDois.push(x * 2)
   }
   return arrayVezesDois
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   const arrayVezesDoisString =[]
   for (x of array){
      arrayVezesDoisString.push (String(x * 2))
   }
   return arrayVezesDoisString
}

// Exercício 17, letra C

function verificaParidade(array) {
   const arrayParImpar = []
   for (x of array){
      if (x%2 === 0){
         arrayParImpar.push (`${x} é par`)
      } else {
         arrayParImpar.push (`${x} é ímpar`)
      }
   }
   return arrayParImpar
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   const pessoasAutorizadas = pessoas.filter((pessoa, i, array) => {
      if (pessoa.altura >= 1.5 && pessoa.idade >= 14 && pessoa.idade <= 60){
         return true
      }
      return false
   })
   return pessoasAutorizadas
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   const pessoasNaoAutorizadas = pessoas.filter((pessoa, i, array) => {
      if (pessoa.altura >= 1.5 && pessoa.idade >= 14 && pessoa.idade <= 60){
         return false
      }
      return true
   })
   return pessoasNaoAutorizadas
}

// Exercício 19

const consultas = [
  { nome: "João", dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", dataDaConsulta: "02/07/2021" },
  { nome: "Paula", dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", dataDaConsulta: "04/05/2021" }
  ]

// Exercício 19, letra A
function ordenaPorNome() {
   consultas.sort(function (a, b) {
      if (a.nome > b.nome) {
        return 1;
      }
      if (a.nome < b.nome) {
        return -1;
      }
      return 0;
    });
    return consultas
}

// Exercício 19, letra B

function ordenaPorData() {
   /*
   let testeDois = (x) => {
      const datas = x.dataDaConsulta 
      const dia = datas[0] + datas[1]
      console.log ("dia " + dia)
      const mes = datas[3] + datas[4]
      console.log ("mes " + mes)
      const ano = datas[6] + datas[7] + datas[8] + datas[9]
      console.log ("ano " + ano)
      console.log (x.nome + " dia " + dia + " mes " + mes + " ano " + ano)
      console.log (new Date(ano, mes, dia).getTime())
      return new Date(ano, mes-1, dia).getTime()
   }
   consultas.sort(function (a, b) {
   if ((a = testeDois(a)) > (b = testeDois(b))) {
     return 1;
   }
   if ((a = testeDois(a)) < (b = testeDois(b))) {
     return -1;
   }
   return 0;
   });
   */

   /*
   --- !!! não entendi porque a função testeDois consegue rodar nos dois pacientes e trava no terceiro =\ !!! ---
   */

   
   consultas.forEach((paciente, i, array) => {
      const datas = paciente.dataDaConsulta 
      const dia = datas[0] + datas[1]
      // console.log ("dia " + dia)
      const mes = datas[3] + datas[4]
      // console.log ("mes " + mes)
      const ano = datas[6] + datas[7] + datas[8] + datas[9]
      // console.log ("ano " + ano)
      paciente.dataDaConsulta  = new Date(ano, mes-1, dia).getTime()
      
   })
   
   consultas.sort(function (a, b) {
      if (a.dataDaConsulta > b.dataDaConsulta) {
        return 1;
      }
      if (a.dataDaConsulta < b.dataDaConsulta) {
        return -1;
      }
      return 0;
    });
   //  console.log (consultas)
   //  let xz = new Date(1620097200000).toDateString()
   //  console.log (xz)
    
   consultas.forEach((paciente, x, array) => {
      const datas = paciente.dataDaConsulta
      const dataString = new Date(datas).toDateString()
      const dia = dataString[8] + dataString[9]
      const ano = dataString[11] + dataString[12] + dataString[13] + dataString[14]
      const meses = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      let mes = ""
      for (i=0; i<meses.length; i++){
         if ((dataString[4] + dataString[5] + dataString[6]) == meses[i]) {
            mes = i+1
         }
      }
      for (i=1; i<9; i++){
         if (mes === i)
         mes = "0" + mes
      }
   
      paciente.dataDaConsulta = `${dia}/${mes}/${ano}`  
   })

   return consultas
}
 

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  
   contas.forEach((cliente, i, array) => {
   let sum = cliente.compras.reduce((a, b) => {
      return a + b;
   }, 0);
   cliente.saldoTotal = cliente.saldoTotal - sum
   })
   return contas
}