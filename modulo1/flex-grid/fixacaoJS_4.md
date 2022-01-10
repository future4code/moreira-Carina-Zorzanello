```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let arrayFiltrado = []
  
  arrayFiltrado = arrayDeNumeros.filter((item) =>{
      return item == numeroEscolhido
    })
  if (arrayFiltrado.length == 0)
    return `Número não encontrado`
  return `O número ${numeroEscolhido} aparece ${arrayFiltrado.length}x`
}

```
