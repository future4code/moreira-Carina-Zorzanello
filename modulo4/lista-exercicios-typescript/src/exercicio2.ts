//Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável. 


type Ano = {
   dia: Number,
}

const opcao: Ano = {
    dia: 18,
}

function recebe(numero: Ano) {
    return numero.dia
  }

console.log(opcao)