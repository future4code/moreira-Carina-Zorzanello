import React from "react";
import axios from "axios";
import styled from "styled-components";
import DetalhesPlayList from "./DetalhesPlayList";

const CardUsuario = styled.div`
  border: 1px solid #A9A9A9;
  margin: 10px;
  padding: 10px;
  width: 300px;
  display: flex;
  justify-content: space-between;
`

const urlAllPlayList = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
const urlSearchPlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=";

const headers = {
    headers: {
      Authorization: "carina-zorzanello-moreira"
    }
  };
  
export default class ListaPlayList extends React.Component {

    state = {
        playlists: [],
        filtraMusica: "",
        detalhes:""
    };

    componentDidMount() {
        this.getAllUPlayList();
    }

    getAllUPlayList = () => {
        axios
        .get(urlAllPlayList, headers)
        .then((res) => {
            this.setState({ playlists: res.data.result.list });
        })
        .catch((err) => {
            alert("Música não encontrada, tente novamente");
        });
    }

    getsearchLists = () => {
        axios
        .get(urlSearchPlaylist + this.state.filtraMusica , headers)
        .then((res)=> {
            this.setState({playlists: res.data.result.playlist});
        })
        .catch((err) => {
            alert("Usuário não encontrado, tente novamente")
        });
    }

    onUserTextChange = (event) => {
        this.setState({ filtraMusica: event.target.value});
    };

    deleteMusica = (id) => {
        const urlDelete = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;
        axios
        .delete(urlDelete, headers,{id: id})
        .then((res)=> {
            alert ("Usuário deletado")
            this.getAllUPlayList()
        })
        .catch((err) => {
            // alert("Algo deu errado, tente novamente")
        });
    }
   
    render(){
        const userPlayList = this.state.playlists.map((list) => {
            return  <CardUsuario key={list.id}>
                        <button onClick={() => this.props.irParaDetalhesPlayList(list.id)}>Detalhes</button> {list.name} 
                        <button onClick={() => this.deleteMusica(list.id)}>X</button>
                    </CardUsuario>;
        });

  

        return (
            <div>
                 <input
                    value={this.state.filtraMusica}
                    onChange={this.onUserTextChange}
                    placeholder="Digite aqui"                   
                />              
                 <button onClick={ this.getsearchLists}>Pesquisar</button>
                <h1>Lista de Músicas</h1>
                {userPlayList}
                              
            </div>
        
        )
    }
      
};
  
  