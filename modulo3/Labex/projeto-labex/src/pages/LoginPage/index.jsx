import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const LoginPage = () => {
  const routes = useNavigate()

  const goToHome = () => {
    routes("/")
  }

  const goToAdminHomePage = () => {
    routes("/adminhomepage")
  }

  return (
    <div>
        <h1>Olá LoginPage.js</h1>
        <button onClick={() => goToHome()}>Voltar</button>
        <button onClick={() => goToAdminHomePage()}>Entrar</button>
    </div>
  );
}