// Ex 1

function checaTriangulo(a: string, b: string, c: string): string {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

  const lado: string = checaTriangulo("Escaleno", "Equilátero", "Isósceles")

 console.log(lado)
 


  // EX 2

  function imprimeTresCoresFavoritas() {
    const cor1: string = window.prompt("Insira sua primeira cor favorita")
    const cor2: string = window.prompt("Insira sua segunda cor favorita")
    const cor3: string = window.prompt("Insira sua terceira cor favorita")
    const resultado: string[] = [cor1, cor2, cor3]
    console.log(resultado)
 }

//  imprimeTresCoresFavoritas()


 EX 3

 function checaAnoBissexto(ano: number): boolean { // retorno de uma condiçao sempre booleano
    const cond1 = ano % 400 === 0
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)

    return cond1 || cond2
 }


 //EX 4

 function comparaDoisNumeros(num1: number, num2: number): number {
    let maiorNumero: number;
    let menorNumero: number;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca: number = maiorNumero - menorNumero;
  
    return diferenca 
  }
 

  // EX 5

  function checaRenovacaoRG(anoAtual: number, anoNascimento: number, anoEmissao: number ): string {
    let idade: number = anoAtual - anoNascimento
    let tempoCarteira: number = anoAtual - anoEmissao
   
     if(idade <= 20 ) {
         return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
       
      }else if(idade >= 20 || idade <= 50) {
         return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
       
      }else if(idade > 50) {
         return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
       
       }else {
           return "error"
       }
   }
   