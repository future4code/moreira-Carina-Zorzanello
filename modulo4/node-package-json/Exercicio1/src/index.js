// a) Responda como comentário no seu código: 
//como fazemos para acessar os parâmetros passados na linha de comando para o Node?

// Resposta: para acessar os parãmetros passados na linha de comando utilizando a propriedade process.argv

// Exercicio 1

const dados = {
    id: 0,
    name: "Carina",
    idade: "32",
}

const idadeAtual = Number(32)
const idadeDaquiSeteAnos = Number(7)

const novaIdade = idadeAtual + idadeDaquiSeteAnos

console.log(`Meu nome é ${dados.name}, eu tenho ${dados.idade} anos. Em sete anos eu terei ${novaIdade}!`)




