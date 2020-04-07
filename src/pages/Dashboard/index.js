import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdRemoveRedEye } from "react-icons/md";

import api from "../../services/api";

import { Container, Header, Content } from "./styles";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const response = await api.get("/users");
    setUsers(response.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <Container>
      <Header>
        <h1>Usuários</h1>
        <Link to="/dashboard/users/new">Criar</Link>
      </Header>
      <Content>
        <table>
          <thead>
            <tr>
              <th align="center">ID</th>
              <th align="center">Nome</th>
              <th align="center">Vaga</th>
              <th align="center">Data de Nascimento</th>
              <th align="center">Email</th>
              <th align="center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {users === undefined ? (
              <tr>
                <td colSpan="6" align="center">
                  Sem usuários
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.job}</td>
                  <td>{user.birth}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={`/dashboard/users/${user.id}`} data={user}>
                      <MdRemoveRedEye size={24} color="#000" />
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </Content>
    </Container>
  );
};

export default Dashboard;
