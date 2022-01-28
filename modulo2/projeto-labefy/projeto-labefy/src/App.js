import React from "react";
import styled from "styled-components";
import AdicionarMusica from "./components/AdicionarMusica";
import CriaPlayList from "./components/CriaPlayList";
import DetalhesPlayList from "./components/DetalhesPlayList";
import ListaPlayList from "./components/ListaPlayList";

const Header = styled.header`
  background-color: rgb(32, 31, 31);
  height: 100px;
  color: white;
  align-items: center;
  font-size: large;
  font-family: Verdana, Arial, Helvetica, sans-serif;
`
const Img = styled.img`
height: 30px;
width: 30px;

`

const Footer = styled.footer`
  background-color: rgb(32, 31, 31);
  height: 50%;
  width: 100%;
  margin: 0px;
  position: absolute;
  color: white;
  font-size: large;
  font-family: Verdana, Arial, Helvetica, sans-serif;
`

const Tela = styled.div`
  margin-bottom: 30%;
  display: flex;
  flex-direction: column;
  align-content: stretch;
  justify-content: center;
  align-items: center;
  
`


export default class App extends React.Component {

  state = {
    pagina: "criar",
    id: ""
  };

irParaCriarPlayList = () => {
  this.setState({pagina: "criar"})
}

irParaListarPlayList = () => {
  this.setState({pagina: "listar"})
}

irParaDetalhesPlayList = (id) => {
  this.setState({pagina: "detalhar"})
  this.setState({id: id})
}

irParaAdicionarMusica = () => {
  this.setState({pagina: "adicionar"})
}

  render(){

    const renderizaTelaCorreta = () => {
      switch (this.state.pagina) {
        case "criar":
          return <CriaPlayList irParaListarPlayList={this.irParaListarPlayList}/>;
        case "listar":
          return <ListaPlayList irParaDetalhesPlayList={this.irParaDetalhesPlayList}/>;
        case "detalhar":
          return <DetalhesPlayList irParaCriarPlayList={this.irParaCriarPlayList} irParaAdicionarMusica={this.irParaAdicionarMusica} id={this.state.id} />;
        case "adicionar":
          return <AdicionarMusica irParaCriarPlayList={this.irParaCriarPlayList}  id={this.state.id} />;
        default:
          return <div> Erro! Página não encontrada</div>;
      }
    };
    return (
   
      <div>
           <Header>Labefy - Seu app de música! <Img src="https://cdn-icons-png.flaticon.com/512/2111/2111624.png"/></Header>
          <Tela className="App">{renderizaTelaCorreta()}</Tela>
          <Footer>Siga nossas redes Sociais!
            <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"/>
            <Img src="https://www.projetosupermed.com.br/wp-content/uploads/2019/09/facebook-icon-02.png"/>
            <Img src="https://w7.pngwing.com/pngs/239/740/png-transparent-twitter-logo-icon-twitter-file-logo-social-media-news-thumbnail.png"/>
          </Footer>
      </div>
    )
  }
}
 
