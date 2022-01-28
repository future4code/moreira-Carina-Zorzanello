import React from "react";
import axios from "axios";
import styled from "styled-components";

const AdicionaMusica = styled.div`
 margin-top: 5px;
 display:flex;
 

`



const headers = {
    headers: {
      Authorization: "carina-zorzanello-moreira"
    }
  };
  
export default class AdicionarMusica extends React.Component {
    
    state = {
        nameMusic: "",
        artistMusic:"",
        urlMusic: ""
        
      };

    createMusic = () => {
        const addMusic = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`;
        const body = {
            name: this.state.nameMusic,
            artist: this.state.artistMusic,
            url: this.state.urlMusic

        };
        axios
        .post(addMusic, body, headers)
        .then((res) => {
          console.log(res);
          alert(`Sua música ${this.state.nameMusic}, foi criada com sucesso!`);
          this.setState({nameMusic: ""})
          this.setState({artistMusic: ""})
          this.setState({urlMusic: ""})
        })
        .catch((err) => {
          console.log(err.response);
          alert(err.response.data.message);
        });

      };

      
      onUserMusicaChange = (event) => {
        this.setState({ nameMusic: event.target.value});
      };

      onUserArtistaChange = (event) => {
        this.setState({ artistMusic: event.target.value});
      };

      onUserLinkChange = (event) => {
        this.setState({ urlMusic: event.target.value});
      };


   render(){

    return ( 
        <AdicionaMusica>
        <div>
          <button onClick={this.props.irParaCriarPlayList}>Criar PlayList</button>
        <h1>Adicione sua música aqui!</h1>
        <input
          value={this.state.nameMusic}
          onChange={this.onUserMusicaChange}
          placeholder="Name da música"
        />
      

        <div>
        <input
          value={this.state.artistMusic}
          onChange={this.onUserArtistaChange}
          placeholder="Nome do Cantor(a)/Banda"
        />
       
        </div>

        <div>
        <input
          value={this.state.urlMusic}
          onChange={this.onUserLinkChange}
          placeholder="Link da música"
        />
      
        </div>

        <div>
        <button onClick={this.createMusic}>Adicionar</button>
        </div>

        </div>
        </AdicionaMusica>
    )
   }
   
}