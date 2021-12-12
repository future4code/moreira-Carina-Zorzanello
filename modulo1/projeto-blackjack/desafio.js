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


   function rodada (){
      const usuario = []
      const computador = []
      let texto
      let valorUsuario
      let valorComputador

      function retornaTexto(item){
         return item.texto
      }
      function retornaValor(item){
         return Number(item.valor)
      }

     usuario[0] = comprarCarta()
     texto = usuario.map(retornaTexto);
     valorUsuario = usuario.map(retornaValor)

     usuario[0] = comprarCarta()
     texto = texto + " " + usuario.map(retornaTexto)
     valorUsuario = Number(valorUsuario) + Number(usuario.map(retornaValor))

   //   console.log(`Usuário - cartas: ${texto} - pontuação ${valorUsuario}`)


     computador[0] = comprarCarta()
     texto = computador.map(retornaTexto);
     valorComputador = computador.map(retornaValor)

     computador[0] = comprarCarta()
     texto = texto + " " + computador.map(retornaTexto)
     valorComputador = Number(valorComputador) + Number(computador.map(retornaValor))

     
   //   console.log(`Computador - cartas: ${texto} - pontuação ${valorComputador}`)
  
   //   if (valorUsuario > valorComputador){
   //      console.log(confirm("Deseja outra rodada?"))
   //   } else if (valorComputador > valorUsuario){
   //      console.log("O computador ganhou!")
   //   } else {
   //      console.log("Empate!")
   //   }
   // }
