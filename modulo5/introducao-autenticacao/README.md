Exercício 1

a) *Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?*

Concordo, pois um gerador de id pode nos trazer números e letras e se eu tipar ele commo number ele só irá aceitar number já string aceita os dois.

b) *A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.*

import { v4 } from "uuid";

export function generateId(): string {
    return v4();
  }

  Exercício2

  a) *Explique o código acima com as suas palavras.*

  

b) *Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.*

c) *Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.*