import styled from "styled-components";

const Hamburger = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 15px 20px;
  cursor: pointer;
  position: relative;

  &:after {
    display: block;
    content: "";
    position: absolute;
    height: 3px;
    width: 22px;
    border-top: 2px solid #ffffff;
    border-bottom: 2px solid #ffffff;
    left: 20px;
    top: 6px;
  }

  &:before {
    display: block;
    content: "";
    position: absolute;
    height: 3px;
    width: 22px;
    border-top: 2px solid #ffffff;
    left: 20px;
    top: 16px;
  }

  @media only screen and (min-width: 500px) {
    display: none;
  }
`;

export default Hamburger;
