import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="page about-page">
      <h1>Sobre Nós</h1>
      <p>
        Somos uma empresa dedicada a fornecer os melhores serviços para nossos
        clientes.
      </p>

      <div className="about-content">
        <h2>Nossa História</h2>
        <p>
          Fundada em 2023, nossa empresa tem como missão criar experiências
          incríveis para usuários da web.
        </p>

        <h2>Nossa Equipe</h2>
        <p>Conheça alguns membros da nossa equipe:</p>
        <ul>
          <li>
            <Link to="/user/10">João Silva - CEO</Link>
          </li>
          <li>
            <Link to="/user/11">Maria Oliveira - CTO</Link>
          </li>
          <li>
            <Link to="/user/12">Pedro Santos - Designer</Link>
          </li>
        </ul>
      </div>

      <div className="page-links">
        <p>Navegue para outras páginas:</p>
        <ul>
          <li>
            <Link to="/">Página Inicial</Link>
          </li>
          <li>
            <Link to="/contact">Entre em contato</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
