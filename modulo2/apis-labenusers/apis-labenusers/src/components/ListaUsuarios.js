import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsuario = styled.div`
  border: 1px solid #A9A9A9;
  margin: 10px;
  padding: 10px;
  width: 300px;
  display: flex;
  justify-content: space-between;
`

const ContainerPagina = styled.div`

    background-color: #1C1C1C;
    padding: 10%;
    width: 10%;
    margin: 10%;
    margin-left: 10%;
    margin-top: 10%;
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

const urlAllUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const urlSearchUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name="

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
            this.setState({ filtraUsuario: ""});
        })
        .catch((err) => {
            alert("Usuário não encontrado, tente novamente")
        });
    }

    onUserTextChange = (event) => {
      this.setState({ filtraUsuario: event.target.value});
    };

    deleteUser = (id) => {
      const urlDelete = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
      axios
      .delete(urlDelete, headers)
      .then((res)=> {
        alert ("Usuário deletado");
        this.getAllUsers()
      })
      .catch((err) => {
          alert("Algo deu errado, tente novamente")
      });
    }

    render(){
          const userList = this.state.users.map((list) => {
            return <CardUsuario key={list.id}>{list.name}
            <button onClick={() => this.deleteUser(list.id)}>X</button>
            </CardUsuario>;
          });
    
          return (
    
          <ContainerPagina>
            <h1>Lista de Usuário</h1>
            {userList}
            <input
              value={this.state.filtraUsuario}
              onChange={this.onUserTextChange}
              placeholder="Nome exato para busca"
            />
          <button onClick={ this.getsearchUsers}>Salvar Edição</button>
          </ContainerPagina>
          
            )
        }
      
  };

