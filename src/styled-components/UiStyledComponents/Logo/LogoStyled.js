import styled from "styled-components";

const LogoStyled = styled.div`
  background-color: #fff;
  padding: 8px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  margin-bottom: 32px;

  img {
    height: 100%;
  }

  @media (min-width: 500px) {
    margin-bottom: 0;
  }
`;

export default LogoStyled;
