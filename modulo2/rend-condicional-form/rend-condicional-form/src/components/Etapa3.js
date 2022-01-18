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
export default class Etapa3 extends React.Component {
    
    render () {

  return (
    <div className="Etapa3">
        <Formulario>Informações gerais de Ensino</Formulario>
      <form  onSubmit={this.props.proximaPagina} action="">
      <DadosFormulario>
        <label for="graduacao">7. Por que você não terminou um curso de graduação?</label>
        <input type="text" id="graduacao" name="graduacao" />

        <label for="complementar">8. Você fez algum curso complementar?</label>
        <input type="text" id="complementar" name="complementar" />
        <select name="escolaridade">
          <option value="medicoI">Nenhum</option>
          <option value="medicoC">Curso técnico</option>
          <option value="superiorI">Curso de inglês</option>
        </select>
        <input type="submit" value="Próxima Etapa" />
        </DadosFormulario>
      </form>
    </div>
  );
}
}