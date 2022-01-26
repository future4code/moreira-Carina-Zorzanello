import React from "react";
import axios from "axios";


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
          alert(`Seu usuário ${this.state.creacteInputName}, ${this.state.creacteInputEmail} foram criados com sucesso!`);
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

      <div>
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
      </div>
      
        )
    }
  
  }


