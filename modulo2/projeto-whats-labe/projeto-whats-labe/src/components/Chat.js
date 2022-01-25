import React from 'react'
import styled from 'styled-components'




class Chat extends React.Component {
 
 
  render() {
   


    return (
      
        <p>{this.props.nomeUsuario} : {this.props.mensagemUsuario}</p>

     
    )}
}

export default Chat