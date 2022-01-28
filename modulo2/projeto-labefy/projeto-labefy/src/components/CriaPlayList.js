import React from "react";
import axios from "axios";
import styled from "styled-components";

const DivItens = styled.div`
    display: flex;
    flex-direction: column;
    align-content: stretch;
    align-items: center;
    margin-top: 10%;
 
`

const PlayList = styled.div`
 align-items: center;
 
`

const urlCreatePlayList = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "carina-zorzanello-moreira"
  }
};


export default class CriaPlayList extends React.Component {

    state = {
        creacteInputName: ""
      };

      createUser = () => {
        const body = {
          name: this.state.creacteInputName,
        };
        axios
        .post(urlCreatePlayList, body, headers)
        .then((res) => {
          console.log(res);
          alert(`Sua PlayList ${this.state.creacteInputName}, foi criada com sucesso!`);
          this.setState({creacteInputName: ""})
        })
        .catch((err) => {
          console.log(err.response);
          alert(err.response.data.message);
        });

      };

      onUserTextChange = (event) => {
        this.setState({ creacteInputName: event.target.value});
      };

    render(){
  
      return (
        <DivItens>
           
            <button onClick={this.props.irParaListarPlayList}>Lista de Músicas</button>
        <PlayList> 
        <h1>Crie sua PlayList aqui!!</h1>
        <input
          value={this.state.creacteInputName}
          onChange={this.onUserTextChange}
          placeholder="Name"
        />
        <button onClick={this.createUser}>Adicionar PlayList</button>
        </PlayList>
      
      </DivItens>
      );
    }
    }