type Num0rStg2 = number|string 

type Estatistica = {
    maior: number,
    menor: number,
    media: number,
}


function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Estatistica ={
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([21, 18, 65, 44, 15, 18]))

//b
//Outras variáveis que compoem esta funcao são de numeros, e foram tipadas como estatisticas e num0rStg


//c
type Amostra = {
    numeros: number[],
    obterEstatisticas: number,
}

//a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros

//b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 

//c) Crie um *type* chamado **amostra** de dados, isto é, um objeto com as propriedades **numeros** e **obterEstatisticas**. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

// const amostraDeIdades = {

//     numeros: [21, 18, 65, 44, 15, 18],

//     obterEstatisticas: (numeros) => {...}
// }