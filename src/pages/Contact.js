import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de envio do formulário
    console.log("Formulário enviado:", formData);
    alert("Obrigado por entrar em contato! Retornaremos em breve.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="page contact-page">
      <h1>Entre em Contato</h1>
      <p>Utilize o formulário abaixo para nos enviar uma mensagem:</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit">Enviar Mensagem</button>
      </form>

      <div className="page-links">
        <p>Navegue para outras páginas:</p>
        <ul>
          <li>
            <Link to="/">Página Inicial</Link>
          </li>
          <li>
            <Link to="/about">Sobre nós</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
