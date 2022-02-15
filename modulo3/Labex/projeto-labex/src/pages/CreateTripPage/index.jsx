import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const CreateTripPage = () => {
  const routes = useNavigate()

  const goToAdminHomePage = () => {
    routes("/adminhomepage")
  }

  return (
    <div>
        <h1>Olá CreateTripPage.js</h1>
        <button onClick={() => goToAdminHomePage()}>Voltar</button>
        <button>Criar</button>
    </div>
  );
}