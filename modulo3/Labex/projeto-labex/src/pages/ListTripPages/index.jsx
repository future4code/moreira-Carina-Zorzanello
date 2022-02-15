import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ListTripPages = () => {
  const routes = useNavigate()

  const goToHome = () => {
    routes("/")
  }
  
  const goToApplicationForm = () => {
    routes("/applicationformpage")
  }

  return (
    <div>
        <h1>Olá ListTripPages.js</h1>
        <button onClick={() => goToHome()}>Voltar</button>
        <button onClick={() => goToApplicationForm()}>Inscrever-se</button>
    </div>
  );
}