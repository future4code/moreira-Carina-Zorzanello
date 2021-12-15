
// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO
// 1 

// a) O que vai ser impresso no console?

// Irá imprimir o nome, o apelido e a posição do index de cada elemento

// 2
// a) O que vai ser impresso no console?

// Irá imprimir os nomes de cada um.

//3 
//  a) O que vai ser impresso no console?
// Irá imprimir os nomes diferentes de Chijo que no caso são Amanda e Lais.


// EXERCICIOS DE ESCRITA DE CÓDIGO

//1 Dado o seguinte array de cachorrinhos que são clientes de um pet shop,
//realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

// a) Crie um novo array que contenha apenas o nome dos doguinhos

// b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
//  A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"


const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 
function nomePets (item){
    return item.nome 
}

const cachorroSalsicha = (item) => {
    return item.raca === "Salsicha" 
}


const nomeAnimais = pets.map(nomePets)
const racaCachorro = pets.filter(cachorroSalsicha)

console.log(nomeAnimais)
console.log(racaCachorro)

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const cachorroSalsicha = (item) => {

     return item.raca === "Poodle" 
    
}

const imprimir = (cachorro) =>{
    console.log(`Parabéns vc ganhou um cupom de desconto de 10% para tosar o/a ${cachorro.nome}`)
}


const racaCachorro = pets.filter(cachorroSalsicha)
const nomeRaca = racaCachorro.map(imprimir)


// _________________________________________________________________________________________________________

// Questão 2
// Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


 // a)Crie um novo array que contenha apenas o nome de cada item

 function nomeProdutos (item){
        return item.nome 
 }

 const retornaNomeProdutos = produtos.map(nomeProdutos)
 console.log(retornaNomeProdutos)



// b)Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles


function descontoNosProdutos (item){
    const novoArray = []
    novoArray.push(item.nome, (item.preco - Number(item.preco) * 5 / 100))
    return novoArray
}

const retornaDescontoProdutos = produtos.map(descontoNosProdutos)
console.log(retornaDescontoProdutos)




//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

 function nomeProdutos (item){
        return item.categoria === "Bebidas" 
 }

 const retornaProdutoBebidas = produtos.filter(nomeProdutos)
 console.log(retornaProdutoBebidas)


//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

 function nomeProdutoYpe (item) {
     return item.nome.includes("Ypê")
 }
 const produtoYpe = produtos.filter(nomeProdutoYpe)
 console.log(produtoYpe)


// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê

 const nomeProdutoYpe = (item) => {
     return item.nome.includes("Ypê")      
}

const imprimir = (ype) =>{
    console.log(`Compre ${ype.nome} por ${ype.preco}`)
}


const produtoYpe = produtos.filter(nomeProdutoYpe)
const nomeproduto = produtoYpe.map(imprimir)





