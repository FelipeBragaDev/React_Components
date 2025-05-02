import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} MeuSite - Todos os direitos reservados
      </p>
    </footer>
  );
};

export default Footer;
