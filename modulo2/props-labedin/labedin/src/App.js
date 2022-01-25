import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import imagemPerfil from './img/perfil.jpg';
import CardPequeno from './components/CardPequeno/CardPequeno'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={imagemPerfil}
          nome="Carina Zorzanello"
          descricao="Oi, eu sou a Carina, mas pode me chamar de Nina. Sou estudante da Labenu. Estou adorando estudar React. Estou fazendo minha transição de carreira, anteriormente trabalhava na parte de Administração/Financeira.
          Nas horas vagas adoro cantar, dançar e estar no mar e na natureza em geral!"
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://as1.ftcdn.net/v2/jpg/02/36/10/52/1000_F_236105214_BAZwfP797jng1TdjSuEaFWpiz4HyXvzZ.jpg"
          nome="E-mail:"
          descricao="carina.zorzanello@gmail.com"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://as2.ftcdn.net/v2/jpg/02/72/89/67/1000_F_272896745_tlTivOH81qWIVzz34KqFGm8LO3N9hMYQ.jpg"
          nome="Endereço:"
          descricao="Rua Carlos Jose, 933 - Pinheira - SC"
        />
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Formando desenvolvedores para o mercado de trabalho!"
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Apontando defeitos."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
