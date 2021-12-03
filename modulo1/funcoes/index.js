
// Exercicios sobre Funções
// Interpretação de código



// Questão um:

function minhaFuncao(variavel) {
   
	return variavel * 5
   
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))


// a) O que vai ser impresso no console?

// Resposta A - no console será impresso o resultado da multiplicação que é 10 e 50.

// b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função 
// `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

// Resposta B - Se eu retirar o console.log não irá imprimir nada no console.




// Questão dois 

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// a. Explique o que essa função faz e qual é sua utilidade

// Resposta A - A função pede para que o usuário digite uma frase e verifica se existira a palavra cenoura
// caso exista retorna true, caso não exista retornará false.

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura`
//      ii.  `CENOURA é bom pra vista`
//      iii. `Cenouras crescem na terra`


//     Resposta B
//     true, true e false

    
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // Exercicio 2
    // Escrita de código

    // Questão 1 = Letra A


    function sobreMim () {

       console.log(`Olá sou Carina tenho 32 moro em Florianópolis e sou estudante`)
      
    }
    sobreMim()



// Letra B

function informacoesUsuario (nome, idade, endereco, profissao) {
  const frase = `Eu sou ${nome} tenho ${idade} anos moro na ${endereco} e sou ${profissao}`   
 
  return frase
}

const retorno = informacoesUsuario("Rebeca", 25, "Rua Carlos Brenner, 933", "professora")

console.log(retorno)





// Questão 2  Letra A

function somarNumeros(numero1, numero2) {
      const soma = numero1 + numero2 
      return soma
}

const resultado = somarNumeros(10, + 10)
console.log(resultado)


// Letra B

function compararNumeros(numero1, numero2) {
    return numero1 >= numero2
}

const primeiroNumero = Number(prompt("Digite o primeiro numero!"))
const segundoNumero = Number(prompt("Digite o segundo número!"))

console.log(compararNumeros(primeiroNumero, segundoNumero))

// Letra C

function compararNumeroPar(numero1) {
    const resto = numero1 % 2
    return resto === 0
}

const primeiroNumero = Number(prompt("Digite um numero!"))

console.log(compararNumeroPar(primeiroNumero))


// Letra D

function frase(mensagem) {

    console.log(mensagem.length)
    console.log(mensagem.toUpperCase())

}

const texto = prompt("Digite uma frase!")

frase(texto)




// Questa 3 Letra A


function soma(numero1, numero2) {

    return numero1 + numero2
}

function subtracao(numero1, numero2) {

    return numero1 - numero2
}

function multiplicacao(numero1, numero2) {

    return numero1 * numero2
}

function divisao(numero1, numero2) {

    return numero1 / numero2
}


const numero1 = Number(prompt("Digite um número"))
const numero2 = Number(prompt("Digite um número"))


console.log(soma(numero1, numero2))
console.log(subtracao(numero1, numero2))
console.log(multiplicacao(numero1, numero2))
console.log(divisao(numero1, numero2))
