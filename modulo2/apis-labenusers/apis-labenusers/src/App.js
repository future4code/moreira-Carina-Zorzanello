import React from "react";
import CriarUsuario from "./components/CriarUsuario";
import ListaUsuarios from "./components/ListaUsuarios";

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
      <button onClick={this.irParaTela}>Trocar de Tela</button>
      <div className="App">{renderizaTelaCorreta()}</div>
      </div>
    )
  
      
        
    }
  
  }


