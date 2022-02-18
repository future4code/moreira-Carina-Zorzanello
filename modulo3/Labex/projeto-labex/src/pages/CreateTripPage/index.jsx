import React from "react";
import { useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { Footer } from "../../components/Footer";
import {Container, MainPage} from './styled';

export const CreateTripPage = () => {
  const routes = useNavigate()

  const goToAdminHomePage = () => {
    routes("/adminhomepage")
  }

  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [durationInDays, setDurationInDays] = useState("");


  const clear = () => {
    setName("");
    setPlanet("");
    setDate("");
    setDescription("");
    setDurationInDays("");
    
  }
  const postCreateTrip = async () => {
    try{
      const body = {
        id: name.id,
        name: name,
        date: date,
        description: description,
        durationInDays: durationInDays,
        planet: planet,
      };

    const token = localStorage.getItem("token");

    const urlCreateTrip = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/carina/trips`;
    await axios
    .post(urlCreateTrip, body,  {
      headers: {
        auth: token
      }
    })
    .then((res) => {
       alert("Viagem criada com sucesso!");
       clear();
    })
    } catch (err) {
        alert("Erro!");
    }
};

const onChangeName = (event) => {
  setName(event.target.value);
};

const onChangePlanet = (event) => {
  setPlanet(event.target.value);
};

const onChangeDate = (event) => {
  setDate(event.target.value);
};

const onChangeDescription = (event) => {
  setDescription(event.target.value);
};

const onChangeDurationInDays = (event) => {
  setDurationInDays(event.target.value);
};


  return (
    <Container>
       <MainPage>
        <h1>Crie sua Viagem!</h1>

        <input
        placeholder="name"
        type="name"
        value={name}
        onChange={onChangeName}
      />
        <input
        placeholder="planet"
        type="planet"
        value={planet}
        onChange={onChangePlanet}
      />
       <input
        placeholder="date"
        type="date"
        value={date}
        onChange={onChangeDate}
      />
       <input
        placeholder="description"
        type="description"
        value={description}
        onChange={onChangeDescription}
      />
       <input
        placeholder="durationInDays"
        type="durationInDays"
        value={durationInDays}
        onChange={onChangeDurationInDays}
      />
        <button onClick={() => goToAdminHomePage()}>Voltar</button>
        <button onClick={() => postCreateTrip()}>Criar</button>
        </MainPage>
        <Footer />
    </Container>
  );
}