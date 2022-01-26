import React from "react";
import styled from "styled-components";
import axios from "axios";

const ContainerPagina = styled.div`

    background-color: #1C1C1C;
    padding: 10%;
    width: 10%;
    margin: 10%;
    margin-left: 15%;
    color: white;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: flex-end;
    justify-content: space-around;
`
const urlCreateUser = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "carina-zorzanello-moreira"
  }
};

  export default class CriarUsuario extends React.Component {

    state = {
      creacteInputName: "",
      creacteInputEmail: ""
    };

     createUser = () => {
      const body = {
        name: this.state.creacteInputName,
        email: this.state.creacteInputEmail
      };
    
      axios
        .post(urlCreateUser, body, headers)
        .then((res) => {
          console.log(res);
          alert(`Usuário ${this.state.creacteInputName} e ${this.state.creacteInputEmail} foi criado com sucesso!`);
          this.setState({creacteInputName: "", creacteInputEmail: ""})
        })
        .catch((err) => {
          console.log(err.response);
          alert(err.response.data.message);
        });
    };

    onUserTextChange = (event) => {
      this.setState({ creacteInputName: event.target.value});
    };
    onUserEmailChange = (event) => {
      this.setState({ creacteInputEmail: event.target.value});
    };
    render(){

      return (

      <ContainerPagina>
        <h1>Criar Usuário</h1>
        <input
          value={this.state.creacteInputName}
          onChange={this.onUserTextChange}
          placeholder="Name"
        />
        <input
          value={this.state.creacteInputEmail}
          onChange={this.onUserEmailChange}
          placeholder="Email"
        />
        <button onClick={this.createUser}>Enviar</button>
       
        {/* {playlistUsers} */}
      </ContainerPagina>
      
        )
    }
  
  }


