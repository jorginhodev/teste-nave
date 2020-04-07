import styled from "styled-components";

import Colors from "../../themes/colors";

export const Container = styled.div`
  width: 100vw;
  padding: 32px;
  background: ${Colors.silver};
  overflow-x: hidden;
`;

export const Header = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: ${Colors.black};
  }

  a {
    display: inline-block;
    width: 140px;
    height: 36px;
    background: ${Colors.black};
    color: ${Colors.white};
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
    line-height: 36px;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;

    &:hover {
      background: rgba(0, 0, 0, 0.8);
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  overflow-x: auto;

  table {
    border-collapse: collapse;
    width: 100%;
    margin: 50px auto;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    thead {
      background: ${Colors.white};
      th {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #7c7c7c;
        padding: 15px 0;
        border-bottom: 1px solid #7c7c7c;
        width: 17%;

        @media (max-width: 768px) {
          width: 40% !important;
        }
      }
    }
    tbody {
      tr {
        background: ${Colors.white};
        color: ${Colors.black};
        border-bottom: 1px solid #7c7c7c;
        &:last-child {
          border-bottom: none;
        }

        td {
          padding: 15px 0;
          color: ${Colors.black};
          text-align: center;
        }
      }

      @media (max-width: 768px) {
        width: auto;
        position: relative;
        -webkit-overflow-scrolling: touch;
        white-space: nowrap;
      }
    }
  }
`;
