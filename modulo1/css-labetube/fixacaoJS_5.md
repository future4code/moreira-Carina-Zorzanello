```
 
const animais = [
    { nome: "Cachorro", classificacao: "mamífero" },
    { nome: "Papagaio", classificacao: "ave" },
    { nome: "Gato", classificacao: "mamífero" },
    { nome: "Carpa", classificacao: "peixe" },
    { nome: "Pomba", classificacao: "ave" }
  ]


function criarArrayNomesAnimais() {
  const novoArray = animais.map((item) => item.nome)

    return novoArray

}

```