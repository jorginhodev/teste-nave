import styled from "styled-components";

import Colors from "../../themes/colors";

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  background: ${Colors.silver};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxLogin = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 30px;
  background: ${Colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  h1 {
    font-weight: 500;
    font-size: 24px;
    text-transform: uppercase;
  }
`;

export const FormLogin = styled.form`
  width: 100%;
  padding: 30px;

  button {
    width: 100%;
    height: 40px;
    margin-top: 30px;
    color: ${Colors.white};
    background: ${Colors.black};
    border-radius: 4px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;

    color: #ffffff;

    &:hover {
      background: rgba(0, 0, 0, 0.8);
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-top: 10px;
  border-bottom: 1px solid #000;

  input {
    width: 100%;
    border: 0;
    font-size: 16px;
    color: #232323;
    margin: 9px 0 0;
    background: transparent;
    transition: border-color 0.2s;
    &::placeholder {
      color: transparent;
    }
    &:placeholder-shown ~ label {
      font-size: 16px;
      cursor: text;
      top: 10px;
    }
    &:focus {
      ~ label {
        position: absolute;
        top: 0px;
        display: block;
        transition: 0.2s;
        font-size: 14px;
        color: #868e9e;
      }
    }
  }
  label {
    position: absolute;
    top: 7px;
    display: block;
    transition: 0.2s;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.3);
  }
`;
