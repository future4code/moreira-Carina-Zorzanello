import React from "react";
import styled from "styled-components";

const Formulario = styled.div`
    background-color: blue;
    display: flex;
    justify-content: center;
`
const DadosFormulario = styled.div`
    background-color: blue;
    display: flex;
    justify-content: center;
`



export default class Etapa1 extends React.Component {
    
    render () {
     
        return (
         
            <div className="Etapa1">
           
            <Formulario>Dados Gerais</Formulario>
            <DadosFormulario>
            <form  onSubmit={this.props.proximaPagina} action="">
              <label for="Nome Completo">1.Qual o seu nome?</label>
              <input type="text" id="Nome Completo" name="Nome Completo" />
      
              <label for="Idade">2.Qual sua idade?</label>
              <input type="text" id="Idade" name="Idade" />
      
              <label for="Email">3.Qual seu e-mail?</label>
              <input type="text" id="Email" name="Email" />
      
              <label for="Escolaridade">4.Qual a sua escolaridade?</label>
              <input type="text" id="Nome Completo" name="Nome Completo" />
              <select name="escolaridade">
                <option value="medicoI">Ensino médio incompleto</option>
                <option value="medicoC">Ensino médio completo</option>
                <option value="superiorI">Ensino superior incompleto</option>
                <option value="superiorC">Ensino superior completo</option>
              </select>
              <input type="submit" value="Próxima Etapa"/>
      
            </form>
            </DadosFormulario >
          </div>
        
        );
      }
    }
  
