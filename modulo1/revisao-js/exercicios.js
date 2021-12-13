// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length  
}
retornaTamanhoArray([1,2,3,4])


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   return array.reverse()
}
retornaArrayInvertido([1,2,3,4])


// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   
}


// EXERCÍCIO 04

// const array =  [1,2,3,4,5,6,7,8]
// const arrayPares = []

function retornaNumerosPares(array) {
    const arrayPares = []
    for(item of array){

        if(item % 2 == 0){
            arrayPares.push(item) 
        }   
    } 
    return arrayPares 
}

// console.log(retornaNumerosPares(array))



// EXERCÍCIO 05

// const array =  [1,2,3,4,5,6,7,8]

function retornaNumerosParesElevadosADois(array) {

    if(array % 2 == 0 ){
        
    } return array * 2
         
}

// const retornaPares = array.filter(retornaNumerosParesElevadosADois)
// console.log(retornaPares)



// EXERCÍCIO 06

// const listaDeNumeros = [11, 15, 18, 14, 12, 13]

function retornaMaiorNumero(array) {
    let maiorNumero = 0
    for(let i=0; i < array.length; i++){
        if(array[i]>maiorNumero){
            maiorNumero = array[i]
        }
            
    }
    return maiorNumero
}

// console.log(retornaMaiorNumero(listaDeNumeros))




// EXERCÍCIO 07


// function retornaObjetoEntreDoisNumeros(num1, num2) {
//     const objeto = {
//         maiorNumero: num2,
//         maiorDivisivelPorMenor: false,
//         diferenca: 0
//     }
//     const menorNumero = num1 
//     if(num1 > num2){
//         objeto.maiorNumero = num1 
//         menorNumero = num2     
//     }
//     if(objeto.maiorNumero % menorNumero){

//     }
// }

// retornaObjetoEntreDoisNumeros(30, 15)





// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    ladoA = 1,
    ladoB = 2,
    ladoB = 2
    
    if(ladoA || ladoB || ladoC){
        console.log("Escaleno")
    }else if(ladoA === ladoB){
        console.log("Isósceles")
    }else(ladoA === ladoB === ladoC)  
    console.log("Equilátero")
}

// classificaTriangulo()


// EXERCÍCIO 10

const listaDeNumeros = [1,2,3,4,5,6,7]
const maiorNumero = []
const menorNumero = []

function retornaSegundoMaiorESegundoMenor(array) {
    const menorNumero = []
    for(item of array){
        if(item < menorNumero){
            menorNumero = array.push(item)
        }
            
    }
    return menorNumero
}

// console.log(retornaSegundoMaiorESegundoMenor(listaDeNumeros))


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const dadosFilme = {
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
     } 
        return 

}
const filme = 

console.log("Venha assistir ao filme ${filme.nome}, de ${}, dirigido por ${} e estrelado por ${}."))


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}

// const filme = {
//         diretor: "Wagner Moura",
//         titulo: "Marighella",
//         lancamento: 2021,
//         elenco: ["bella Carnero", "eu jorge", "Bruno Gagliasso"],
//         visto: false
//     }
    
//     filme.personagens = "Bela", "Martighella", "Humberto", "Lucio"
//     filme.personagens = ["Bela", "Martighella", "Humberto", "Lucio"]

//     console.log(`Atriz ${filme.elenco[0]} interpreta ${filme.personagens[0]}`)
//     console.log(`Ator ${filme.elenco[1]} interpreta ${filme.personagens[1]}`)
//     console.log(`Ator ${filme.elenco[2]} interpreta ${filme.personagens[2]}`)
//     console.log(`Ator ${filme.elenco[3]} interpreta ${filme.personagens[3]}`)
//     console.log(`Ator ${filme.elenco[4]} interpreta ${filme.personagens[4]}`)
    
//     console.log("")

//     filme.elenco[0] = "Paulo Gustavo"

//     console.log(`O nome do filme é ${filme.titulo}.
//     E seus personagens são: ${filme.personagens[0]}, 
//     ${filme.personagens[1]}, ${filme.personagens[2]}`)