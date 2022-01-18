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
    <div className="Final">
     <Formulario>O FORMULÁRIO ACABOU</Formulario>
     <Formulario>Muito obrigado por participar! Entraremos em contato!</Formulario>
    </div>
  );
}
}
