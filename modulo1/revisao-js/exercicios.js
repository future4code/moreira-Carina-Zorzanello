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
    return array.sort(function(a, b) {
        return a - b;
      });
}



// EXERCÍCIO 04

const array =  [1,2,3,4,5,6,7,8]
const arrayPares = []

function retornaNumerosPares(array) {
    const arrayPares = []
    for(item of array){

        if(item % 2 == 0){
            arrayPares.push(item) 
        }   
    } 
    return arrayPares 
}

console.log(retornaNumerosPares(array))



// EXERCÍCIO 05

function retornaNumerosParesElevadosADois(array) {
    const arrayRetorno =  array.filter(arrayAoQuadrado)

    
    return arrayRetorno.map((item)=> item * item)        
}

function arrayAoQuadrado (item){
    
    if(item % 2 == 0 ){
       return item 
   }
}


// EXERCÍCIO 06

const listaDeNumeros = [11, 15, 18, 14, 12, 13]

function retornaMaiorNumero(array) {
    let maiorNumero = 0
    for(let i=0; i < array.length; i++){
        if(array[i]>maiorNumero){
            maiorNumero = array[i]
        }
            
    }
    return maiorNumero
}

console.log(retornaMaiorNumero(listaDeNumeros))




// EXERCÍCIO 07


function retornaObjetoEntreDoisNumeros(num1, num2) {
    let objeto = {
        maiorNumero: num2,
        maiorDivisivelPorMenor: false,
        diferenca: 0
    }
    let menorNumero = num1 
    if(num1 > num2){
        objeto.maiorNumero = num1 
        menorNumero = num2 
        objeto.diferenca = num1 - num2    
    }else{
        objeto.diferenca = num2 - num1
    }

    if(objeto.maiorNumero %  menorNumero === 0){
        objeto.maiorDivisivelPorMenor = true
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const pares = []
   for(i=0; i<n*2; i= i+ 2){
    pares.push(i) 
   }
   return pares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    
    if(ladoA === ladoB && ladoB === ladoC && ladoC === ladoA){
        return "Equilátero"
    }else if(ladoA === ladoB || ladoB === ladoC || ladoC === ladoA){
        return "Isósceles"
    }else  
        return "Escaleno"
}

classificaTriangulo(1,2,3)


// EXERCÍCIO 10


function retornaSegundoMaiorESegundoMenor(array) {
    
    let arrayOrdenado = array.sort(function(a, b) {
        return a - b;
      });
      let arrayResultado = []
      arrayResultado[1] = arrayOrdenado[1]
      arrayResultado[0] = arrayOrdenado[arrayOrdenado.length - 2] 
      return arrayResultado
}


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const divulgaFilme = {
        nome:"O Diabo Veste Prada",
        ano:2006,
        diretor:"David Frankel",
        atores:["Meryl Streep"," Anne Hathaway"," Emily Blunt"," Stanley Tucci"]
    }
  
    return  `Venha assistir ao filme ${divulgaFilme.nome}, de ${divulgaFilme.ano}, dirigido por ${divulgaFilme.diretor} e estrelado por ${divulgaFilme.atores}.`
  
}


// EXERCÍCIO 12

const pessoas = {
	nome: "Astrodev",
	idade: 25,
	email: "astrodev@labenu.com.br",
	endereco: "Rua do Futuro, 4"
}
function retornaPessoaAnonimizada(pessoa) {
    const novaPessoa = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
  return novaPessoa
}



// EXERCÍCIO 13A

const listaDePessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

function retornaPessoasAutorizadas(pessoas) {
   let pessoasAutorizadas = pessoas.filter((item)=> item.altura >= 1.5 && item.idade > 14 && item.idade < 60)

   return pessoasAutorizadas
}


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = pessoas.filter((item)=> item.altura < 1.5 || item.idade <= 14 || item.idade >= 60)

    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14  // Gente tentei fazer mas não consegui, não consegui mais pensar mesmo com ajuda, muito exercício e muito pouco tempo de explicação
// Sei que é para a gente pesquisar também, mas se a gente não entende se precisa de uma explicação de alguém não vai adiantar.

const dadosClientes = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

let totalCompra = 0

function retornaContasComSaldoAtualizado(contas) {
        contas.map(dadosCliente())
}
 function dadosCliente (item){
    item.compras.map(dadosCompras())
 }

 function dadosCompras (item){
    totalCompra += item 
 }



// EXERCÍCIO 15A
const dadosPacientes = [

    { nome: "João", dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", dataDaConsulta: "02/07/2021" },
    { nome: "Paula", dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", dataDaConsulta: "04/05/2021" }
  ]

function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
    return consultas.sort(function(a, b) {
        return a.nome > b.nome ? 1 : b.nome > a.nome ? -1: 0
    });
}

// EXERCÍCIO 15B //  esta eu tbm tentei mas não consegui mais.
function retornaArrayOrdenadoPorData(consultas) {
    return consultas.sort(function(a, b) {
                return new Date(a.dataDaConsulta) - new Date(b.dataDaConsulta)
            });
}

