import React from "react";
import styled from "styled-components";


const Formulario = styled.div`
  display: flex;
  justify-content: center;
}
`
const DadosFormulario = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 10px;
  
 
`

export default class Etapa2 extends React.Component {
    
    render () {
     
  return (
    <div className="Etapa2">
       <Formulario>Informações do Ensino Superior</Formulario>
      <form  onSubmit={this.props.proximaPagina} action="">
      <DadosFormulario>
        <label for="Curso">5.Qual curso?</label>
        <input type="text" id="curso" name="curso" />

        <label for="Unidade">6.Qual a unidade de ensino?</label>
        <input type="text" id="Unidade" name="Unidade" />
        <input type="submit" value="Próxima Etapa" />
       </ DadosFormulario>
      </form>
    </div>
  );
}
}

