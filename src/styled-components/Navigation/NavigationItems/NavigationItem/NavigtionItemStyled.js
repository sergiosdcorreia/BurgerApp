import styled, { css } from "styled-components";

const NavigationItemStyled = styled.li`
  margin: 0;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    height: 100%;
    padding: 16px 10px;
    border-bottom: 4px solid transparent;
    box-sizing: border-box;
    display: block;

    &:hover {
      background-color: #8f5c2c;
      border-bottom: 4px #40a4c8;
      color: white;
    }

    ${props =>
      props.active &&
      css`
        background-color: #8f5c2c;
        border-bottom: 4px #40a4c8;
        color: white;
      `};
  }
`;

export default NavigationItemStyled;
