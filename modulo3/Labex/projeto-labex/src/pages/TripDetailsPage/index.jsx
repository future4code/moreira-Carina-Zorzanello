import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const TripDetailsPage = () => {
  const routes = useNavigate()

  const goToAdminHomePage = () => {
    routes("/adminhomepage")
  }

  return (
    <div>
      <h1>Olá TripDetailsPage.js</h1>
      <button onClick={() => goToAdminHomePage()}>Voltar</button>
    </div>
  );
}