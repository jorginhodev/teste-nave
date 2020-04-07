import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { Container, BoxUser } from "./styles";

const User = ({ match }) => {
  const id = match.params.id;
  const [user, setUser] = useState({});

  const loadUser = async () => {
    const response = await api.get(`/users/${id}`);
    setUser(response.data);
  };

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <BoxUser>
        <h1>{user.name}</h1>
        <section>
          <p>
            <strong>Vaga:</strong> {user.job}
          </p>
          <p>
            <strong>Data de Nascimento:</strong> {user.birth}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </section>
        <Link to="/dashboard">Voltar</Link>
      </BoxUser>
    </Container>
  );
};

export default User;
