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
         let userCards = [userCard1, userCard2]
         let userTotal1 = (Number(userCard1.valor) + Number(userCard2.valor))
         let pcTotal1 = (Number(pcCard1.valor) + Number(pcCard2.valor))
         let compare = "O usuário ganhou!"
         let userTotal2 = 0
         let i = 0
         let again = true
         let arrayCards = []
         for (i = 0; i < userCards.length; i++) {
            arrayCards.push(Number(userCards[i].valor))
         }
         let arrayTotal = 0  
         
         let cardsTexto2 = [userCard1.texto, userCard2.texto]

         
      while (again === true) { 
         
         
         if (userTotal1 === 22){
         compare = "O computador ganhou!"
         again = false
         } else if (userTotal1 === pcTotal1 && pcTotal1 === arrayTotal){
         compare = 'Empate!'
         again = false
         } else {
            
            if (arrayTotal > 21){
               compare = "O computador ganhou!"
               again = false
            } else if (arrayTotal === 21 && pcTotal1 < 21) {
               again = false
            } else {
               askAnother = confirm("Suas cartas são " + cardsTexto2 + ". A carta revelada do computador é" + pcCard1.texto + "." + "\n" + "Deseja comprar mais uma carta?")
               if (askAnother){
                  let userBuy = comprarCarta()
                  userCards.push(userBuy)
                  arrayCards.push(Number(userBuy.valor))
                  cardsTexto2.push(userBuy.texto)
               } else {
                  again = false
               }
            }
         }
         for (i = 0; i < arrayCards.length; i++) {
            arrayTotal += arrayCards[i]
            
         }
      }

      let cardsTexto = []
      for (i = 0; i < userCards.length; i++) {
         cardsTexto.push(userCards[i].texto)
      }  
      for (i = 0; i < arrayCards.length; i++) {
         userTotal2 += arrayCards[i]
      }
      if (userTotal2 < pcTotal1) {
         compare = "O computador ganhou!"
      } else if (userTotal2 < pcTotal1) {
         compare = "O usuário ganhou!"
      }
      let usuario = console.log("Usuário - cartas: " + cardsTexto + " - " + userTotal2)
      let computador = console.log("Computador - cartas: " + pcCard1.texto + " " + pcCard2.texto + " - " + pcTotal1)
    
      console.log(compare)
    }
    else {
       console.log("O jogo acabou.")
    }