import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";

export default class App extends React.Component {
  state = {
    etapa: 1,
  };

  
  irParaProximaEtapa = () => {
    const proximaEtapa = this.state.etapa + 1;
    this.setState({ etapa: proximaEtapa });
  };

  render () {
    const renderizaEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <Etapa1 proximaPagina={this.irParaProximaEtapa}/>;
        case 2:
          return <Etapa2 proximaPagina={this.irParaProximaEtapa}/>;
        case 3:
          return <Etapa3 proximaPagina={this.irParaProximaEtapa}/>;
        case 4:
          return <Final proximaPagina={this.irParaProximaEtapa}/>;
      }
    };
      return (
        <div>
          {renderizaEtapa()}
          
        </div>
      );
    }
  }
