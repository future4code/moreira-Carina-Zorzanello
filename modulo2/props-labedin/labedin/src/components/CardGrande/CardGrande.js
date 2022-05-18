import React from 'react';
import {ContainerPrincipal, Imagem, Nome, DivContainer} from './styled';

function CardGrande(props) {
    return (
        <ContainerPrincipal>
            <Imagem src={ props.imagem } />
            <DivContainer>
                <Nome>{ props.nome }</Nome>
                <p>{ props.descricao }</p>
            </DivContainer>
        </ContainerPrincipal>
    )
}

export default CardGrande;