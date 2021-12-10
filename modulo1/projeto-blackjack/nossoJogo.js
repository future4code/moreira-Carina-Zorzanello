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

    console.log("Bem-vindo ao Jogo BlackJack")

    if(confirm("Quer iniciar uma nova rodada?")) {
     
      rodada()
      
   } else {
         console.log("O jogo acabou")
   }

   function cartaSorteada(carta) {

   }


   function rodada (){
      const usuario = []
      const computador = []
      let texto
      let valor

     usuario[0] = comprarCarta()
     texto = usuario.map(retornaTexto);
     valor = usuario.map(retornaValor)

     usuario[0] = comprarCarta()
     texto = texto + " " + usuario.map(retornaTexto)
     valor = Number(valor) + Number(usuario.map(retornaValor))



     usuario[0] = comprarCarta()
     texto = computador.map(retornaTexto);
     valor = computador.map(retornaValor)

     usuario[0] = comprarCarta()
     texto = texto + " " + computador.map(retornaTexto)
     valor = Number(valor) + Number(computador.map(retornaValor))

     console.log(`Usuário - cartas: ${texto} - pontuação ${valor}`)
     console.log(`Computador - cartas: ${texto} - pontuação ${valor}`)
  
  
      function retornaTexto(item){
         return item.texto
      }
      function retornaValor(item){
         return Number(item.valor)
      }
    
   }
  
   