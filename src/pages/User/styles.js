import styled from "styled-components";

import Colors from "../../themes/colors";

export const Container = styled.div`
  width: 100vw;
  padding: 32px;
  background: ${Colors.silver};
`;

export const BoxUser = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 30px;
  background: ${Colors.white};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  h1 {
    font-weight: 500;
    font-size: 24px;
    color: #7c7c7c;
    margin-bottom: 24px;
  }

  section {
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: ${Colors.black};
      margin-bottom: 24px;
      strong {
      }
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    width: 140px;
    height: 36px;
    line-height: 36px;
    background: ${Colors.black};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    font-size: 14px;
    text-transform: uppercase;
    text-align: center;
    color: ${Colors.white};

    &:hover {
      background: rgba(0, 0, 0, 0.8);
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
