import React from "react";
import styled from "styled-components";
import CriarUsuario from "./components/CriarUsuario";
import ListaUsuarios from "./components/ListaUsuarios";


const BotaoTela = styled.div`
  background-color: 	#DCDCDC;
  border: 1px solid black;
  border-radius: 10px 10px;
  margin: 5px;
  padding: 5px;
  width: 150px;
  align-items: center;
  padding: 10px;
  margin-left: 20%;
  color: black;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: flex-end;
  justify-content: space-evenly;

`
  export default class App extends React.Component {

    state = {
      pagina: "criar",
    };

    irParaTela = () => {
      if(this.state.pagina === "criar"){
        this.setState({pagina: "listar"})
      }else{
        this.setState({ pagina: "criar" });
      }
     
    };
    render(){

    
      const renderizaTelaCorreta = () => {
        switch (this.state.pagina) {
          case "criar":
            return <CriarUsuario />;
          case "listar":
            return <ListaUsuarios />;
          default:
            return <div> Erro! Página não encontrada</div>;
        }
      };

    return( 
      <div>
      <BotaoTela onClick={this.irParaTela}>Trocar de Tela</BotaoTela>
  
      <div className="App">{renderizaTelaCorreta()}</div>

      
      </div>
    )
  
      
        
    }
  
  }


