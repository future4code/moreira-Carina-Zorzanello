import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`


export const MainPage = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    padding-top: 10%;
    padding-bottom: 15%;
    font-size: 20px;
    text-align: justify;
    line-height: 2em;
    justify-items: center;
    align-items: center;
    background-color: black;
    color: white;
    
   
`

export const DivInputs = styled.div`
  
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    margin-bottom: 5px;
    width: 95%;
    margin-right: 50px;

`
export const InputName = styled.div`
  margin-top: 4px;
    padding: 10px;
    margin-right: -58px;

`

export const InputIdade = styled.div`
    margin-top: 4px;
    padding: 10px;
    margin-right: -58px;

`


export const InputTexto = styled.div`
     margin-top: 4px;
    padding: 10px;
    margin-right: -58px;

`


export const InputPais = styled.div`
    margin-top: 4px;
    padding: 10px;
    margin-right: -58px;
`


export const InputProfissao = styled.div`
    margin-top: 4px;
    padding: 10px;
    margin-right: -58px;
`