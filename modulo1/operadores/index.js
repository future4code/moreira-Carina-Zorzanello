// EXERCICIO DE INTERPRETAÇÃO DE CODIGO

// 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 // false
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 // false
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) // true 
console.log("c. ", resultado)

console.log("d. ", typeof resultado) // booleano

// // 2

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

// Neste caso como ele declarou a variável e usou o prompt somente irá imprimir uma pergunta ao usuário
//pedindo que o mesmo digite números e estes números irão aparecer, mas não irão somar, pois também a variável imprime uma
//string e não um número.

// 3 
// Para que ele consiga a soma de 2 números precisamos atribuir as variáveis números.

let primeiroNumero1 = 10
let segundoNumero2 = 20

const soma2 = primeiroNumero1 + segundoNumero2

console.log(soma2)

// EXERCICIO  DE ESCRITA DE CÓDIGO

//1

const idade = prompt("Quantos anos você tem?")
const idadeMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))

console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeMelhorAmigo)

console.log("A diferença de idade é de?", idade - idadeMelhorAmigo, "anos")

//2 

const numeroPar = Number(prompt("Digite um número par!"))
const resultadoa = numeroPar % 2
console.log("Resto da divisão é?", resultadoa)

// O padrão que notei é que sempre que o usuário digitar um número par o resultado será zero.
// e quando ele digitar um número ímpar o resultado será o restante, a sobra da divisão.

// 3

const idadeUsuario = Number(prompt("Qual sua idade em anos?"))

const idadeMeses = idadeUsuario * 12 
const idadeDias = idadeUsuario * 365
const idadeHoras = idadeDias * 24

console.log("Esta é minha idade em meses", idadeMeses, "esta é minha idade em dias", idadeDias, "E esta é minha idade em horas", idadeHoras)

// 4

const numeroA = Number(prompt("Digite um número"))
const numeroB = Number(prompt("Digite outro número"))

const maiorQueSegundo = numeroA > numeroB
const igualSegundoNumero = numeroA === numeroB
const divisivelPeloSegundo = numeroA % numeroB 
const eDivisivelAb = divisivelPeloSegundo === 0 
const divisivelPeloPrimeiro = numeroB % numeroA 
const eDivisivelBa = divisivelPeloPrimeiro === 0

console.log("O primeiro número é maior que o segundo?", maiorQueSegundo)
console.log("O primeiro numero é igual ao segundo?", igualSegundoNumero)
console.log("O primeiro numero é divisível pelo segundo?", eDivisivelAb)
console.log("O segundo numero é divisível pelo primeiro?", eDivisivelBa)


