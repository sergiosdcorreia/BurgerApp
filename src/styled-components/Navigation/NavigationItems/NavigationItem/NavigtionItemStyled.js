import styled, { css } from "styled-components";

const NavigationItemStyled = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;

  a {
    color: #8f5c2c;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;

    &:hover {
      color: #40a4c8;
    }

    ${props =>
      props.active &&
      css`
        color: #40a4c8;
      `};
  }

  @media (min-width: 500px) {
    margin: 0;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;

    a {
      color: white;
      height: 100%;
      padding: 16px 10px;
      border-bottom: 4px solid transparent;

      &:hover {
        background-color: #8f5c2c;
        border-bottom: 4px solid #40a4c8;
        color: white;
      }

      ${props =>
        props.active &&
        css`
          background-color: #8f5c2c;
          border-bottom: 4px solid #40a4c8;
          color: white;
        `};
    }
  }
`;

export default NavigationItemStyled;
