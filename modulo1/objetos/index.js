
// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO
//1

// a) O que vai ser impresso no console?
// RESPOSTA:  No primeiro console.log irá imprimir o nome do primeiro ator somente Matheus Nachtergaele, pois ele está
// pedindo que imprima a posição 1 do elenco.
// No segundo concole.log irá imprimir apenas o último ator que neste caso é Virginia Cavendish
// No terceiro console.log irá imprimir o segundo canal onde será transmitido o filme que é Globo as 14h

// 2 

// a) O que vai ser impresso no console?
// RESPOSTA: No primeiro console.log irá imprimir:
// {nome: Juca, idade:3, raca:srd}
// No segundo console.log irá imprimir:
// {nome: Juba, idade:3, raca:srd}
// No terceiro console.log irá imprimir:
// {nome: Jubo, idade:3, raca:srd}

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// RESPOSTA: A sintaxe dos três pontos trás a informação da primeira variável declarada que neste caso é Cachorro.
// Ele faz o que chamamos de Spread ou espalhamento.

// 3 

// a) O que vai ser impresso no console?
// RESPOSTA: Irá imprimir "false" pois ele vai conseguir ler a string "" e um undefined pois 
// a forma de chamar a função para imprimir está incorreta, deveria ser pessoa.backender e pessoa.nome
// e lá em cima no return não tem definição/valor nenhum apenas está declarado então ele não imprime nada.

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// Resposta: Porque como para ler uma string ele precisa ser declarado como string que é através das "" ele vai ler a 
// única palavra que fará sentindo que é false, pois no console.log o valor backender está como string.


// EXERCÍCIOS DE ESCRITA DE CÓDIGO.

// 1-Resolva os passos a seguir: 
//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos).
//Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos.
// Depois, chame a função feita no item anterior passando como argumento o novo objeto

const pessoa = {
    nome: "Daiane",
    apelidos: ["dai", "ane", "daia"]
}

console.log(`Eu sou a ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)

const novosApelidos = {
    ...pessoa,
    apelidos: ["nena", "dada", "nani"]

}

console.log(`Eu sou a ${novosApelidos.nome}, mas pode me chamar de: ${novosApelidos.apelidos}`)


// 2-RESOLVA OS PASSOS A SEGUIR:

// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`

const pessoa1 = {
    nome: "Eva",
    idade: 32,
    profissao: "professora"
}

const pessoa2 = {
    nome: "Daiane",
    idade: 30,
    profissao: "dentista"
}

function novaPessoa(pessoa) {
    const novaPessoa = {
    ...pessoa, 
    arrayRetorno: [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length],
      
  }

 return novaPessoa.arrayRetorno
}  

console.log(novaPessoa(pessoa1))
console.log(novaPessoa(pessoa2))

// 3 -RESOLVA OS PASSOS A SEGUIR:

//a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

// b) Crie três novos objetos que representem frutas de um sacolão.
//  Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

// c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. 
// Invoque essa função passando os três objetos criados. 
// d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos. 

const carrinho = []

const fruta1 = {
        nome: "maca",
        disponivel: true
    }

const fruta2 = {
    nome: "banana",
    disponivel: false
}

const fruta3 = {
    nome: "laranja",
    disponivel: false
}

function novaFuncao(fruta) {

    carrinho.push(fruta)

}

novaFuncao(fruta1)
novaFuncao(fruta2)
novaFuncao(fruta3)

console.log(carrinho)






