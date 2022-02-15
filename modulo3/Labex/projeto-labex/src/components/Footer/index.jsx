import React from 'react';
import {AreaFooter, RedesSociais, Colunas1} from './styled';


export const Footer = () => {
   
        return (
            <AreaFooter>
               <RedesSociais>
                   <p>Facebook</p>
               </RedesSociais>               
               
               <div>
                   <Colunas1>Conheça</Colunas1> 
                    <p>Franquias e Multimarcas</p>
                    <p>Trabalhe com a Gente</p>
                    <p>Procon-RJ</p>
               </div>
             
               
            </AreaFooter>
    );
  }