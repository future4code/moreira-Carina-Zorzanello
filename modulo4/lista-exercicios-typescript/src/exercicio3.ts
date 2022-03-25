//Você foi contratado por um serviço de streaming para organizar o sistema de catálogos de filmes.
// Cada filme possui 3 informações essenciais: 1. nome do filme; 2. ano de lançamento e 3. gênero do filme. 
//Os gêneros da plataforma se limitam aqueles encontrados no seguinte ENUM de gêneros: 

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type DadoFilme = {
    nome: string, 
    anoLancamento: number, 
    genero: string,
    pontuacao?: number,

}

const informacoesFilme: DadoFilme = {
    nome: "Duna",
    anoLancamento: 2021,
    genero:GENERO.ROMANCE,
    pontuacao: 20,
}

function recebeInformacao(nome: string, anoLancamento: number, genero: string, pontuacao?: number): DadoFilme {
    let retorno: DadoFilme={
        nome: nome,
        anoLancamento: anoLancamento,
        genero: genero,
        pontuacao: pontuacao,
    }
    return retorno
  }

  console.log(recebeInformacao(informacoesFilme.nome, informacoesFilme.anoLancamento, informacoesFilme.genero, informacoesFilme.pontuacao))