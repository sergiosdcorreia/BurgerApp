import styled from "styled-components";

const ModalStyled = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  transform: translateY(-100vh);
  opacity: 0;

  ${({ show }) => show && `transform: translateY(0); opacity: 1`}
  }

  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`;

export default ModalStyled;