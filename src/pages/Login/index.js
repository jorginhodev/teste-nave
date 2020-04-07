import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

import { Container, BoxLogin, FormLogin, InputWrapper } from "./styles";

const Login = () => {
  const history = useHistory();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (login === "") {
      toast.error("Favor preencher o login", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    if (password === "") {
      toast.error("Favor preencher a senha", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    if (password.length < 4) {
      toast.error("A senha deve conter no mínimo 4 caracteres", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    try {
      const { data } = await api.get("/auth");
      if (data.login === login && data.password === password) {
        toast.success("Login efetuado com sucesso!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        history.push("/dashboard");
      } else {
        toast.error("Dados inválidos, tente novamente!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      toast.error("Erro ao logar, tente novamente", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <Container>
      <BoxLogin>
        <h1>Entrar</h1>
        <FormLogin>
          <InputWrapper>
            <input
              required
              id="login"
              type="text"
              name="login"
              placeholder="Login"
              onChange={(e) => setLogin(e.target.value)}
            />
            <label htmlFor="login">Login</label>
          </InputWrapper>
          <InputWrapper>
            <input
              required
              id="password"
              type="password"
              name="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Senha</label>
          </InputWrapper>
          <button type="submit" onClick={handleLogin}>
            Entrar
          </button>
        </FormLogin>
      </BoxLogin>
    </Container>
  );
};

export default Login;
