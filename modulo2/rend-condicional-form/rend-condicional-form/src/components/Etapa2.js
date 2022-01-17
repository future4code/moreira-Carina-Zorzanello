import React from "react";

export default class Etapa2 extends React.Component {
    
    render () {
     
  return (
    <div className="Etapa2">
       <h2>Informações do Ensino Superior</h2>
      <form  onSubmit={this.props.proximaPagina} action="">
        <label for="Curso">5.Qual curso?</label>
        <input type="text" id="curso" name="curso" />

        <label for="Unidade">6.Qual a unidade de ensino?</label>
        <input type="text" id="Unidade" name="Unidade" />
        <input type="submit" value="Próxima Etapa" />

      </form>
    </div>
  );
}
}

