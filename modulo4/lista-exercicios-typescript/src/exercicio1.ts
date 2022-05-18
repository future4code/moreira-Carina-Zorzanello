//Crie um função que receba uma string com o nome e outra string com uma data de nascimento 
//(ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato: 
//"Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 

type Dados = {
    nome: string, 
    dataNascimento: string, 
}

const informacoes: Dados = {
    nome: "Carina",
    dataNascimento: "18/04/1989",
}
  
function resposta(dados: Dados): string[]{
    return dados.dataNascimento.split("/")
}

console.log(`Olá me chamo ${informacoes.nome}, nasci no dia ${resposta(informacoes)[0]} do mês ${resposta(informacoes)[1]} do ano de ${resposta(informacoes)[2]}`)