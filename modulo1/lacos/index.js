
// EXERCICIOS INTERPRETACAO DE CÓDIGO

// EXERCICIO 

//1 - O que o código abaixo está fazendo? Qual o resultado impresso no console?

// O código está somando os números valor + i 
// Será impresso no console o número 10

// 2 
// a) O que vai ser impresso no console?

// Resposta: no console será impresso os números maiores que 18

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente?
//  Se sim, o que poderia ser usado para fazer isso?

// Resposta - Sim eles são suficientes e a forma de acessar seria tirando o if do código.


// 3 Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
// Será impresso 4 linhas, cada linha contém asteríscos a primeira 1, segunda 2, a terceira 3  e a quarta 4


// EXERCICIO DE ESCRITA DE CÓDIGO

// 1 - Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.

// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

// c) Por fim, imprima o array com os nomes dos bichinhos no console


let numero = Number(prompt("Quantos animais de estimação você possui?"))
let bichinhos = []

if(numero == 0){
    console.log("Que pena! Você pode adotar um pet!")

}else{
    for(i=0; i < numero; i++){
        bichinhos[i]= prompt("Digite o nome.")
    } 
    console.log(bichinhos)

}


// 2 - Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números.
// Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

// a) Escreva um programa que **imprime** cada um dos valores do array original.

// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma:
//"O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original


//A

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function imprimeArray (array){
    for(item of array){
        console.log(item)
    }
       
}

imprimeArray(array)


// //B

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function imprimeArray (array){
    for(item of array){
        console.log(item / 10)
    }
       
}

imprimeArray(array)

// C

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function imprimeArray (array){

    for(item of array){
        if(item % 2 == 0){

            console.log(item)

        }
    }  
}

imprimeArray(array)

// D
   
const array =  [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const tamanho = array.length

for(let i = 0; i<tamanho; i++){ 
    
    console.log(`O elemento do índex ${i} é: ${array[i]}`)
}

// E


const array =  [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function retornaMaiorNumero (array){

    let valorMaximo = 0
   
   

    for(item of array){
        if(item>valorMaximo){
           valorMaximo = item
        }
       
    }

    return valorMaximo
}


function retornaMenorNumero (array){
    let valorMinimo = array[0]
    for(item of array){
        if(item<valorMinimo){
            valorMinimo = item
        }
    }
    return valorMinimo
}

console.log(`O maior número é ${retornaMaiorNumero(array)} e o menor é ${retornaMenorNumero(array)}`)