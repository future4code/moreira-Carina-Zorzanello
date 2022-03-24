// console.log("exercicio1")

//O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.

//a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

//Resposta: vai ocorrer um erro pois como o typeScript é uma linguagem tipada se eu declarei string receberá somente string.


//b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

//Resposta: Para que seja possível aceitar number e string temos que typar em forma de variável:
//type Num0rStg2 = number|string


//c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

//`nome`, que é uma string;

//`idade`, que é um número;

//`corFavorita`, que é uma string.

//Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

//d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso.
enum Cores{

    VERMELHO= "vermelho",
    LARANJA= "laranja",
    AMARELO= "amarelo",
    VERDE= "verde",
    AZUL= "azul",
    ANIL= "anil",
    VIOLETA= "violeta",
} 

type Person = {
    name: string,
    idade: number,
    corFavorita: string,
}


const pessoa : Person={
    name: "Nina",
    idade: 32,
    corFavorita:Cores.VIOLETA,
}

const pessoa1 : Person={
    name: "Aline",
    idade: 32,
    corFavorita:Cores.AMARELO,

}

const pessoa2 : Person={
    name: "Guto",
    idade: 37,
    corFavorita:Cores.AZUL,

}

console.table(pessoa)
console.table(pessoa1)
console.table(pessoa2)
