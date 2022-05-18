// EXERCICIO 1

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

// Primeiro ele irá imprimir o valor de b que é 10. 
// depois como houve uma reatribuição de valor, pois a constante let permite isso, irá imprimir 10,5 e não irá somar, 
// pois existe uma vígula 

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

// Irá imprimir 10,10,10 pois como o programa lê por linha e a variável let pode ser reatribuida e neste caso ela foi, pois
// o valor de b passou a ser igual o valor de c que é igual a a que é 10

// let p = prompt("Quantas horas você trabalha por dia?")
// let t = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${t/p} por hora`)

const horasTrabalhadas = prompt("Quantas horas trabalha por dia?") 
const valorPorDia = prompt("Quanto você recebe por dia?")

console.log("Eu trabalho", horasTrabalhadas,"horas por dia e recebo", valorPorDia, "reais.")

// Neste caso o programa pedia quantas horas o usuário trabalhava por dia e quanto ele ganhava por dia.
// da forma que estava sendo declarado anteriormente o código ficou difícil de entender o que se pedia ao usuário,
// somente daria para entender se rodasse o programa, agora na forma que escrevi o código acredito ser melhor, pois é possível 
// claramente entender o que o programa espera. Achei melhor usar const e também o padrão CamelCase que assim fica bem legível 
// o que se pedi. E também imprimi no console uma frase completa, dando contexto a resposta do usuário.

// EXERCICIO 2 

// (1)
let nome 
let idade 
console.log(typeof nome, typeof idade)

// imprimiu undefined pois como não foi atribuido valor nenhum para as variáveis ele retornará undefined. 

let nome = prompt("Qual seu nome?")
let idade = prompt("Qual sua idade?")
console.log(nome, idade)
console.log(typeof nome, typeof idade)

// O que notei quando imprimi em tela é que onde diz idade, embora o usuário tenha digitado um numero, 
// ele retornou como string

console.log("Olá me chamo", nome, "e tenho", idade, "anos de idade")

// (2)

 let pergunta1 = "Você está usando uma roupa azul hoje?"
 let pergunta2 = "Você gosta de fazer exercícios?"
 let pergunta3 = "Você sabe falar inglês?"

const resposta1 = prompt("pergunta1")
const resposta2 = prompt("pergunta2")
const resposta3 = prompt("pergunta3")

console.log(pergunta1, "-", resposta1)
console.log(pergunta2, "-", resposta2)
console.log(pergunta3, "-", resposta3) 

// (3)

let a = 10
let b = 25

c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)


