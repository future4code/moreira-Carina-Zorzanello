import React from "react";

export default class Etapa3 extends React.Component {
    
    render () {

  return (
    <div className="Etapa3">
        <h2>Informações gerais de Ensino</h2>
      <form  onSubmit={this.props.proximaPagina} action="">
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

      </form>
    </div>
  );
}
}