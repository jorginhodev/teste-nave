import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

import { Container, BoxUser, FormUser, InputWrapper } from "./styles";

const NewUser = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [birth, setBirth] = useState("");
  const [email, setEmail] = useState("");

  const formatDate = (value) => {
    const month = value.split("-")[1];
    let year;
    let day;

    if (value.split("-")[0] === 4) {
      year = value.split("-")[2];
      day = value.split("-")[0];
    } else {
      year = value.split("-")[0];
      day = value.split("-")[2];
    }

    return `${day}/${month}/${year}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/users", {
        name,
        job,
        birth: formatDate(birth),
        email,
      });
      console.log(response);
      toast.success("Usuário cadastrado com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      history.push("/dashboard");
    } catch (error) {
      toast.error("Erro ao criar usuário, tente novamente", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <Container>
      <BoxUser>
        <h1>Criar usuario</h1>
        <FormUser>
          <InputWrapper>
            <input
              required
              id="name"
              type="text"
              name="name"
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name">Nome</label>
          </InputWrapper>
          <InputWrapper>
            <input
              required
              id="job"
              type="text"
              name="job"
              placeholder="Vaga"
              onChange={(e) => setJob(e.target.value)}
            />
            <label htmlFor="name">Vaga</label>
          </InputWrapper>
          <InputWrapper>
            <input
              required
              id="birth"
              // type="datetime-local"
              type="date"
              name="birth"
              placeholder="Data de Nascimento"
              maxLength="10"
              onChange={(e) => setBirth(e.target.value)}
            />
            <label htmlFor="name">Data de Nascimento</label>
          </InputWrapper>
          <InputWrapper>
            <input
              required
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="name">Email</label>
          </InputWrapper>
          <button type="submit" onClick={handleSubmit}>
            Entrar
          </button>
        </FormUser>
      </BoxUser>
    </Container>
  );
};

export default NewUser;
