import styled from "styled-components";

const TextAreaStyled = styled.textarea`
  outline: none;
  padding: 6px 10px;
  box-sizing: border-box;
  font: inherit;
  background-color: white;
  border: 1px solid #ccc;
  display: block;
  width: 100%;

  &:focus {
    outline: none;
    background-color: #ccc;
  }
`;

export default TextAreaStyled;
