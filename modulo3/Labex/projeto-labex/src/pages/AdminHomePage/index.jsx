import React from "react";
import { useNavigate, useParams } from "react-router-dom";


export const AdminHomePage = () => {
  const routes = useNavigate()

  const goToCreateTrip = () => {
    routes("/createtrippage")
  }

  const goToTripDetails = () => {
    routes("/tripdetailspage")
  }

  const goToHome = () => {
    routes("/")
  }

  return (
    <div>
        <h1>Olá AdminPage.js</h1>
        <button onClick={() => goToCreateTrip()}>Criar Viagem</button>
        <button>Logout</button>
        <button onClick={() => goToTripDetails()}>Visualizar Viagem</button>
        <button onClick={() => goToHome()}>Voltar</button>
    </div>
  );
}