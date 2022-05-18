// EXERCICIO INTERPRETAÇÃO DE CODIGO

//1 
let array
console.log('a. ', nome)
// Neste código irá imprimir no console undefined pois a variável não foi declarada de forma incorreta
// o certo seria assim: 
// let nome = "array"
// console.log('a. ', nome)


array = null
console.log('b. ', array)
// Neste codigo irá imprimir no console Null pois está declarada não de forma correta mas como o console le o código em linha lá em cima
// está declarado let array então ele entende aqui na parte de baixo que esta sendo declarado que let array = null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// irá imprimir no console o numero 11 que é a quantidade de itens existentes dentro do array.

let i = 0
console.log('d. ', array[i])
// aqui ele irá imprimir a posição do meu index 0 que é o numero 3

array[i+1] = 19
console.log('e. ', array)
// aqui irá acrescentar o número 19 na posição 1 do meu index.

const valor = array[i+6]
console.log('f. ', valor)
// aqui irá imprimir a posição 6 do meu index que é o numero 9

// 2 

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// 1  - irá transformar as letras todas em maiuscula
// 2 - irá substituir onde tiver a letra A por I - subi num onibus em mirrocos
// 3 -  vai dizer o total de itens contando os espaços 27 

// Exercicio escrita de Código

// 1 
const nomeUsuario = prompt("Digite seu nome")
const emailDoUsuario = prompt('Digite seu e-mail')

const fraseTemplate = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso! Seja Bem-Vindo(a) ${nomeUsuario}`
console.log(fraseTemplate)

// 2 

const comidasPreferidas = ["Lazanha", "Batata frita", "Hamburguer", "Sushi", "Churrasco"]
console.log(comidasPreferidas)
const imprimaFrase = `Estas são minhas comidas preferidas:`
console.log(imprimaFrase)
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

const perguntaUsuario = prompt("Qual sua comida preferida?")
console.log("A comida preferida do usuário é:", perguntaUsuario)
comidasPreferidas[1] = perguntaUsuario
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

// 3 

const listaDeTarefas = []
const perguntaUsuario = prompt("Digite 1 tarefas que você precise realizar")
console.log("As tarefas que preciso realizar são:", perguntaUsuario)
const perguntaUsuario1 = prompt("Digite 1 tarefas que você precise realizar")
console.log("As tarefas que preciso realizar são:", perguntaUsuario1)
const perguntaUsuario2 = prompt("Digite 1 tarefas que você precise realizar")
console.log("As tarefas que preciso realizar são:", perguntaUsuario2)

listaDeTarefas.push(perguntaUsuario, perguntaUsuario1, perguntaUsuario2) 
console.log(listaDeTarefas)
const indice = Number(prompt("Qual tarefa você já realizou?"))
listaDeTarefas.splice(indice, 1)
console.log(listaDeTarefas)




