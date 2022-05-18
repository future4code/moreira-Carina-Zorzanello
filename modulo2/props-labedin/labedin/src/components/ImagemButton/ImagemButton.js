import React from 'react';
import {ImagemBotao, Imagem} from './styled';

function ImagemButton(props) {
    return (
        <ImagemBotao>
            <Imagem src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImagemBotao>

    )
}

export default ImagemButton;