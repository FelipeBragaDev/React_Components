import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="page not-found-page">
      <h1>404 - Página Não Encontrada</h1>
      <div className="error-container">
        <div className="error-icon">404</div>
        <p>A página que você está procurando não existe ou foi movida.</p>
      </div>

      <div className="return-options">
        <p>Você pode retornar para:</p>
        <ul>
          <li>
            <Link to="/">Página Inicial</Link>
          </li>
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

export default NotFound;
