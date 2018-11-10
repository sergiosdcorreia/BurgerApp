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
    height: 7px;
    width: 22px;
    border-top: 2px solid #ffffff;
    border-bottom: 2px solid #ffffff;
    left: 20px;
    top: 16px;
  }

  &:before {
    display: block;
    content: "";
    position: absolute;
    height: 3px;
    width: 22px;
    border-top: 2px solid #ffffff;
    left: 20px;
    top: 26px;
  }
`;

export default Hamburger;
