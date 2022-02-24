import React from "react";
import {CardContainer, DivCardsLista} from "./Styled";

const CardPost = (props) => {
    return (
        <CardContainer>  


                <DivCardsLista>
                    Título: {props.body}
                </DivCardsLista>

                <DivCardsLista>
                    Comentário: {props.title.toUpperCase()}
                </DivCardsLista>

                <DivCardsLista>
                    Comentários: {props.commentCount}
                </DivCardsLista>

                {/* <DivCardsLista>
                    Data Postagem: {props.createdAt}
                </DivCardsLista> */}

                <DivCardsLista>
                    Votos: {props.userVote}
                </DivCardsLista>

                <DivCardsLista>
                    Votar: {props.voteSum}
                </DivCardsLista>


        </CardContainer>

    )
}

export default CardPost