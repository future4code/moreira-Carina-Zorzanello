import React from 'react';
import styled from "styled-components";
import Chat from "./Chat";

const WhatsLabe = styled.div`
    display: flex;
    background-color: #e8c3e8;
    width: 900px;
    height: 500px;
    border-radius: 15px;
    text-align: center;
    padding: 10px;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    align-content: flex-end;

`;

const ChatMensagem = styled.text`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
`;

const Imputs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 900px;
`;

const Input = styled.input`
  padding: 0.9em 0.8em;
  border-radius: 0.5em;
  font-weight: 450;
  line-height: 1.3;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
`;

const Button = styled.div`
  padding: 0.9em 0.8em;
  border-radius: 0.5em;
  font-weight: 450;
  line-height: 1.3;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);

`;


class ChatLabe extends React.Component {
  state = {
    nomeUsuario: "",
    mensagemUsuario: "",
    chat: []
  };

  onChangeNome = (event) => {
    this.setState({ nomeUsuario: event.target.value });
  };
  onChangeUsuario = (event) => {
    this.setState({ mensagemUsuario: event.target.value });
  };

  onClickEnviar = () => {
   const novaMensagem = {
     nomeUsuario: this.state.nomeUsuario,
     mensagemUsuario: this.state.mensagemUsuario
   }
   const novasMensagens = [...this.state.chat, novaMensagem]; 
   this.setState({ chat:novasMensagens });
  
  };

  render() {
    const mensagensChat = this.state.chat.map((item) => {
      return (
        
        <Chat {...item} />
       
      );

    })
    return (
      <WhatsLabe>
        <ChatMensagem>
          {mensagensChat}
        </ChatMensagem>
        <Imputs>
          <Input
            value={this.state.nomeUsuario}
            onChange={this.onChangeNome}
            placeholder="Nome"
          />
          <Input
            value={this.state.mensagemUsuario}
            onChange={this.onChangeUsuario}
            placeholder="Mensagem do Usuário"
          />
          <Button onClick={this.onClickEnviar}>Enviar</Button>
        </Imputs>
      </WhatsLabe>
    );
  }
}
export default ChatLabe;
