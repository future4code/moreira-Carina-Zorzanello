// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
// function calculaAreaRetangulo() {
//   // implemente sua lógica aqui

//   const escreva1 = Number(prompt("Digite a altura de um retangulo"))
//   const escreva2 = Number(prompt("Digite a largura de um retangulo"))

//   console.log( escreva1 * escreva2)

// }

// calculaAreaRetangulo()



// // EXERCÍCIO 02
// function imprimeIdade() {
//   // implemente sua lógica aqui
//   const anoAtual = Number(prompt("Digite o ano atual"))
//   const anoNascimento = Number(prompt("Digite o ano de nascimento"))

//   console.log(anoAtual - anoNascimento)

// }

// imprimeIdade()


// EXERCÍCIO 03
// function calculaIMC(peso, altura) {
//   // implemente sua lógica aqui
//   return peso / (altura * altura)

// }

// const peso = Number(prompt("Digite seu peso"))
// const altura = Number(prompt("Digite sua altura"))

// console.log(calculaIMC(peso, altura))


// EXERCÍCIO 04
// function imprimeInformacoesUsuario() {
//   // implemente sua lógica aqui
//   // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
//     const nome = prompt("Digite seu nome")
//     const idade = prompt("Digite sua idade")
//     const email = prompt("Digite seu e-mail")

//     console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
// }

// imprimeInformacoesUsuario()

// EXERCÍCIO 05
// function imprimeTresCoresFavoritas() {
//   // implemente sua lógica aqui
//    const cor1 = prompt("Digite sua primeira cor favorita")
//    const cor2 = prompt("Digite sua segunda cor favorita")
//    const cor3 = prompt("Digite sua terceira cor favorita")

//    const array = [cor1, cor2, cor3]

//    console.log(array)
// }

// imprimeTresCoresFavoritas()

// EXERCÍCIO 06
// function retornaStringEmMaiuscula(string) {
//   // implemente sua lógica aqui
//    return string.toUpperCase()
// }

// const string = prompt("Digite uma palavra")
// console.log(retornaStringEmMaiuscula(string))


// EXERCÍCIO 07
// function calculaIngressosEspetaculo(custo, valorIngresso) {
//   // implemente sua lógica aqui
//       return custo / valorIngresso
// }

// const custo = Number(prompt("Digite valor do custo do evento"))
// const ingresso = Number(prompt("Digite valor do ingresso"))

// console.log(calculaIngressosEspetaculo(custo, ingresso))



// EXERCÍCIO 08
// function checaStringsMesmoTamanho(string1, string2) {
//   // implemente sua lógica aqui
//       return string1.length === string2.length
// }

// const string1 = prompt("Digite uma palavra")
// const string2 = prompt("Digite outra palavra")

// console.log(checaStringsMesmoTamanho(string1, string2))

// EXERCÍCIO 09
// function retornaPrimeiroElemento(array) {
//   // implemente sua lógica aqui
//     return array[0]
// }
//  const elemento = prompt("Digite uma frase")
//  console.log(retornaPrimeiroElemento(elemento))


// EXERCÍCIO 10
// function retornaUltimoElemento(array) {
//   // implemente sua lógica aqui
//   return array[array.length - 1]

// }

// const Ultimoelemento = prompt("Digite uma frase")
// console.log(retornaUltimoElemento(Ultimoelemento))


// EXERCÍCIO 11
// function trocaPrimeiroEUltimo(array) {
//   // implemente sua lógica aqui
//     const primeiro = array[0]
//     array[0] = array[array.length - 1]
//     array[array.length - 1] = primeiro
//     return array 
// }

// const primeiroEUltimo = prompt("Digite um array")
// console.log(trocaPrimeiroEUltimo(primeiroEUltimo))


// EXERCÍCIO 12
// function checaIgualdadeDesconsiderandoCase(string1, string2) {
//   // implemente sua lógica aqui
//       return string1.toUpperCase() === string2.toUpperCase()
// }

// const frase = prompt("Digite uma frase")
// console.log(checaIgualdadeDesconsiderandoCase(frase))


// EXERCÍCIO 13

// function checaRenovacaoRG() {
//   // implemente sua lógica aqui
//     const anoAtual = Number(prompt("Digite o ano atual"))
//     const anoNascimento = Number(prompt("Digite o seu ano de nascimento"))
//     const emissaoRg = Number(prompt("Digite o ano de emissao do seu rg"))
//     const idade = anoAtual - anoNascimento
//     const anosId = anoAtual - emissaoRg

//     const resultado1 = idade <= 20 && anosId == 5 
//     const resultado2 = idade > 20 && idade <= 50 && anosId >= 10
//     const resultado3 = idade > 50 && anosId >= 15
    
//     console.log(resultado1 || resultado2 || resultado3)
   
// }

// checaRenovacaoRG()

// EXERCÍCIO 14
// function checaAnoBissexto(ano) {
//   // implemente sua lógica aqui
  
//   const multiplo = (ano % 400) == 0 
//   const multiplo4 = (ano % 4) == 0 && (ano % 100) > 0 || (ano % 400) == 0

//   return multiplo || multiplo4

// }

// const digitaAno = Number(prompt("Digite um ano"))

// console.log(checaAnoBissexto(digitaAno))



// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Você tem mais de 18 anos?")
  const escolaridade = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  const idade1 = idade.toLowerCase() == "sim"
  const escolaridade2 = escolaridade.toLowerCase() == "sim"
  const disponibilidade3 = disponibilidade.toLowerCase() == "sim" 

  console.log(idade1 && escolaridade2 && disponibilidade3)

}

checaValidadeInscricaoLabenu()