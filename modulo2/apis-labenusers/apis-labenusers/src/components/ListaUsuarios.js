import React from "react";
import axios from "axios";

const urlAllUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const urlSearchUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name="
const urlDelete = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id"

const headers = {
  headers: {
    Authorization: "carina-zorzanello-moreira"
  }
};

export default class ListaUsuarios extends React.Component {

    state = {
      users: [],
      filtraUsuario: "",
    };

    componentDidMount() {
        this.getAllUsers();
      }

    getAllUsers = () => {
        axios
        .get(urlAllUsers, headers)
        .then((res) => {
            this.setState({ users: res.data });
        //   alert(`Usuário encontrado com sucesso`);
        })
        .catch((err) => {
          alert("Usuário não existe, tente novamente");
        });
    }

        getsearchUsers = () => {
            axios
            .get(urlSearchUsers + this.state.filtraUsuario , headers)
            .then((res)=> {
                this.setState({users: res.data});
            })
            .catch((err) => {
                alert("Usuário não encontrado, tente novamente")
            });
        }

        onUserTextChange = (event) => {
            this.setState({ filtraUsuario: event.target.value});
          };

          deleteUser = (id) => {
              axios
              .delete(urlDelete, headers,{id: id})
              .then((res)=> {
               alert ("Usuário deletado")
            })
            .catch((err) => {
                // alert("Algo deu errado, tente novamente")
            });
          }
    render(){
        const userList = this.state.users.map((list) => {
          return <li key={list.id}>{list.name} <button onClick={this.deleteUser(list.id)}>delete</button></li>;
        });
  
        return (
  
        <div>
          <h1>Lista de Usuário</h1>
          {userList}
          <input
            value={this.state.filtraUsuario}
            onChange={this.onUserTextChange}
            placeholder="Nome exato para busca"
          />
        <button onClick={this.getsearchUsers}>Salvar Edição</button>
        </div>
        
          )
      }
    
};

