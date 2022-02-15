import React from "react";
import { useNavigate} from "react-router-dom";
import {Container} from './styled';
import {Footer} from '../../components/Footer';

export const HomePage = () => {
  const routes = useNavigate()

  const goToListPage = () => {
    routes("/listtrippages")
  }

  const goToLoginPage = () => {
    routes("/loginpage")
  }

  return (
    <div>
    <Container>
        <h1>Olá HomePage.js</h1>
        <button onClick={() => goToListPage()}>Ver Viagens</button> 
        <button onClick={() => goToLoginPage()}>Área Admin</button>
    </Container>
    <Footer />
    </div>
    
  );
}