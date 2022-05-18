import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Input = styled.input`
 background-color: lavender;
  margin: 5px auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  width: 200px;

`
const Button = styled.button`
  margin: 5px auto;
  padding: 10px;
  width: 200px;
  color: pink;
`

class App extends React.Component {
  state = {
    posts: [

      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"

      }, {
        nomeUsuario: "Renatinha",
        fotoUsuario: "https://picsum.photos/50/51",
        fotoPost: "https://picsum.photos/200/151"

      }, {
        nomeUsuario: "Amanda",
        fotoUsuario: "https://picsum.photos/50/53",
        fotoPost: "https://picsum.photos/200/153"

      }
    ],

    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  };
  adicionaPost = () => {
    const novoPost = {   
      nomeUsuario: this.state.valorInputNomeUsuario,    
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost

    };

    const novosPosts = [...this.state.posts, novoPost]; 
    this.setState({ posts: novosPosts });

  };
  onChangeInputNomeUsuario = (event) => {

    this.setState({ valorInputNomeUsuario: event.target.value });
  };
  onChangeInputFotoUsuario = (event) => {

    this.setState({ valorInputFotoUsuario: event.target.value });
  };
  onChangeInputFotoPost = (event) => {

    this.setState({ valorInputFotoPost: event.target.value });
  };
  render() {
    const listaDePost = this.state.posts.map((post) => {
      return (
        <Post {...post} />
      );

    })
    return (
      <MainContainer>

        {listaDePost}
        <Input
          value={this.state.valorInputNomeUsuario}
          onChange={this.onChangeInputNomeUsuario}
          placeholder={"Nome Usuário"}
        />
        <Input
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={"Foto Usuário"}
        />
        <Input
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={"Foto Post"}
        />
        <Button onClick={this.adicionaPost}>Enviar</Button>
      </MainContainer>

    );
  }
}

export default App;
