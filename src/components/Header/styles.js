import styled from "styled-components";

import Colors from "../../themes/colors";

export const Container = styled.header`
  width: 100vw;
  height: 60px;
  background: ${Colors.black};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;

  img {
    margin-left: 32px;
  }
`;
