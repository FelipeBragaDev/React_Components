import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page home-page">
      <h1>Página Inicial</h1>
      <p>Bem-vindo ao nosso site!</p>

      <div className="featured-content">
        <h2>Conteúdo em Destaque</h2>
        <p>Conheça alguns dos nossos usuários em destaque:</p>
        <ul>
          <li>
            <Link to="/user/1">Usuário 1</Link>
          </li>
          <li>
            <Link to="/user/2">Usuário 2</Link>
          </li>
          <li>
            <Link to="/user/3">Usuário 3</Link>
          </li>
        </ul>
      </div>

      <div className="page-links">
        <p>Navegue para outras páginas:</p>
        <ul>
          <li>
            <Link to="/about">Sobre nós</Link>
          </li>
          <li>
            <Link to="/contact">Entre em contato</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
