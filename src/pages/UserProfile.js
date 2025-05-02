import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// Dados simulados de usuários
const USERS = {
  1: { id: "1", name: "Ana Silva", role: "Designer", avatar: "👩‍🎨" },
  2: { id: "2", name: "Carlos Oliveira", role: "Desenvolvedor", avatar: "👨‍💻" },
  3: { id: "3", name: "Mariana Costa", role: "Marketing", avatar: "👩‍💼" },
  10: { id: "10", name: "João Silva", role: "CEO", avatar: "👨‍💼" },
  11: { id: "11", name: "Maria Oliveira", role: "CTO", avatar: "👩‍💻" },
  12: { id: "12", name: "Pedro Santos", role: "Designer", avatar: "👨‍🎨" },
};

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulando uma chamada de API
    setTimeout(() => {
      const userData = USERS[id];
      setUser(userData);
      setLoading(false);
    }, 800);
  }, [id]);

  if (loading) {
    return (
      <div className="user-profile loading">
        <p>Carregando perfil do usuário...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="user-profile not-found">
        <h1>Usuário não encontrado</h1>
        <p>O usuário com ID {id} não existe em nossa base de dados.</p>
        <Link to="/">Voltar para a página inicial</Link>
      </div>
    );
  }

  return (
    <div className="page user-profile">
      <h1>Perfil do Usuário</h1>

      <div className="profile-card">
        <div className="avatar">{user.avatar}</div>
        <h2>{user.name}</h2>
        <p className="role">{user.role}</p>
        <p className="id">ID: {user.id}</p>
      </div>

      <div className="page-links">
        <p>Navegue para outras páginas:</p>
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

export default UserProfile;
