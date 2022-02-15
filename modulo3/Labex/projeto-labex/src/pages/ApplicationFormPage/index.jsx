import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ApplicationFormPage = () => {
  const routes = useNavigate()

  const goToListPage = () => {
    routes("/listtrippages")
  }
  return (

    <div>
        <h1>Olá ApplicationFormPage.js</h1>
        <button onClick={() => goToListPage()}>Voltar</button>
        <button>Enviar</button>
    </div>
  );
}