
// Interpretação de Código

// Exercicio 1 

// a) Explique o que o código faz. Qual o teste que ele realiza? 
// Ele testa se um número é par, se é divisível por ele.

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// Números pares

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// Para números que o resto da divisão for diferente de 0, números ímpares.


// Exercicio 2

// a) Para que serve o código acima?
// Para retornar ao usuário o valor de cada fruta.

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// Será impresso que o valor que custa a Maçã é de R$2,25

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console 
// se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// Ele irá retornar que o valor da Pêra é R$5,00 pois como não teremos o break ele vai entender lendo o default que R$5,50
// não é válido então vai retornar o último valor que é R$5,00.



// Exercicio 3

// a) O que a primeira linha está fazendo?
// Está pedindo para comparar se o número que a pessoa vai digitar é maior que 0

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Se ele digitar 10 a mensagem será "Esse número passou no teste", se ele digitar -10 não vai aparecer mensagem nenhuma,
// pois o programa não pede para comprar se é menor que 0.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Sim haverá um erro quanto a linha 51 pois já existe um console que está imprimindo a mensagem "Esse número passou no teste"


// Exercicios escrita de código.

// 1 Faça um programa que pergunta ao usuário qual a idade dele e 
// imprima no console se ele/ela pode dirigir (apenas maiores de idade).

// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
// Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

const idade = Number(prompt("Qual sua idade?"))

function comparaIdade (dirigir) {
    if (dirigir >= 18) {
        console.log("Você pode dirigir")
    } else {
        console.log("Você não pode dirigir")
    }
}

comparaIdade(idade)



// Exercicio 2

// Agora faça um programa que verifica que turno do dia um aluno estuda.
// Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno).
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// const perguntaAluno = prompt("Digite o turno em que você estuda, M para Matutino, V para Vespertino ou N para Noturno?")

function comparaTurno (turno) {
    if (turno == "M") {
        console.log("Bom dia!")
    } else if (turno == "V") {
        console.log("Boa Tarde!")
    } else {
        console.log("Boa noite!")
    }
}

comparaTurno(perguntaAluno)


// Exercicio 3
// Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// const perguntaAluno = prompt("Digite o turno em que você estuda, M para Matutino, V para Vespertino ou N para Noturno?")

switch (perguntaAluno.toLowerCase().toUpperCase()) {
    case "M": 
        console.log("Bom dia!")
        break;
    case "V": 
        console.log("Boa Tarde!")
        break;
    case "N":
        console.log("Boa noite!")
        break;
    
    default:
        console.log("Turno não encontrado")
        break;
    
}

// Exercicio 4

// Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia
// e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta
// sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
// Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

const genero = prompt("Digite aqui o gênero de filme de sua preferência!")
const valorIngresso = Number(prompt("Digite o valor que deseja pagar!"))
const filme = "fantasia";
const ingresso = 15

function vaiAssistir (genero, ingresso, filme) { 
   if (filme === genero && ingresso < 15) {
       console.log("Bom filme!") 
   } else  {
       console.log("Escolha outro filme!")
   }
}

vaiAssistir(genero, valorIngresso, filme)

