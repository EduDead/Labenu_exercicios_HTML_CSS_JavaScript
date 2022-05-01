/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log ("Bem-vindo(a) ao jogo de blackjack")

let askPlayer = confirm("Quer iniciar uma nova rodada?")
if (askPlayer){
   let userCard1 = comprarCarta()
   let userCard2 = comprarCarta()
   let pcCard1 = comprarCarta()
   let pcCard2 = comprarCarta()
   let userTotal = (Number(userCard1.valor) + Number(userCard2.valor))
   let pcTotal = (Number(pcCard1.valor) + Number(pcCard2.valor))
   let compare

   if (userTotal > pcTotal || pcTotal === 22){
      compare = "O usuário ganhou!"
   }
   else if (userTotal < pcTotal || userTotal === 22){
      compare = "O computador ganhou!"
   }
   else if(userTotal === pcTotal){
      compare = 'Empate!'
   }

   let usuario = console.log("Usuário - cartas: " + userCard1.texto + " " + userCard2.texto + " - " + userTotal)
   let computador = console.log("Computador - cartas: " + pcCard1.texto + " " + pcCard2.texto + " - " + pcTotal)

   console.log(compare)
}
else {
   console.log("O jogo acabou.")
}