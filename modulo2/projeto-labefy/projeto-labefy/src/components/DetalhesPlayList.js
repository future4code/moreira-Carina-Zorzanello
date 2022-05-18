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

const headers = {
    headers: {
      Authorization: "carina-zorzanello-moreira"
    }
  };
  
export default class DetalhesPlayList extends React.Component {
    state = {
        tracks: [],
       
    };

    componentDidMount() {
        this.getAllTracks();
    }

    getAllTracks = () => {
        const urlDetalhes = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`
        axios
        .get(urlDetalhes, headers)
        .then((res) => {
            this.setState({ tracks: res.data.result.tracks });
        })
        .catch((err) => {
            alert("Música não encontrada, tente novamente");
        });
    }

   render(){
    const tracksList = this.state.tracks.map((list) => {
        return  <CardUsuario key={list.id}>
                  {list.name  + " " }
                  {list.artist  + " " }
                  <audio src= {list.url} controls loop></audio>
                  
                </CardUsuario>;
    });


    return ( 
        
        <div>
            <button onClick={this.props.irParaAdicionarMusica}>Adicione músicas à PlayList!</button>
             <h1>Lista de Músicas</h1>
            {tracksList}

            <button onClick={this.props.irParaCriarPlayList}>Voltar</button>
        </div>
    )
   }
   
}