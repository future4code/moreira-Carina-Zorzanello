import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroPage from "../pages/CadastroPage/index";
import FeedPage from "../pages/FeedPage/index";
import LoginPage from "../pages/LoginPage/index";
import PostPage from "../pages/PostPage/index";
import Header from "../components/Header/Header";


const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element ={<LoginPage />} />
                <Route path="/cadastropage" element ={  <CadastroPage />} />
                <Route path="/feedpage" element ={<FeedPage />} />
                <Route path="/postpage" element ={<PostPage />} />
                <Route path="*" element ={<h1>Página não encontrada!</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router