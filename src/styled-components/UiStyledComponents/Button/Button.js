import styled, { css } from "styled-components";

const Button = styled.button`
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #aa6817;
  cursor: pointer;
  outline: none;

  &:disabled {
    background-color: #ac9980;
    border: 1px solid #7e7365;
    color: #ccc;
    cursor: default;
  }

  &:hover:disabled {
    background-color: #ac9980;
    color: #ccc;
    cursor: not-allowed;
  }

  ${props =>
    props.less &&
    css`
      background-color: #d39952;
      color: white;

      &:hover {
        background-color: #daa972;
        color: white;
      }

      &:active {
        background-color: #daa972;
        color: white;
      }
    `};
  ${props =>
    props.more &&
    css`
      background-color: #8f5e1e;
      color: white;

      &:hover {
        background-color: #99703f;
        color: white;
      }

      &:active {
        background-color: #99703f;
        color: white;
      }
    `};
  ${props =>
    props.danger &&
    css`
      color: #944317;
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font: inherit;
      padding: 10px;
      margin: 10px;
      font-weight: bold;
      display: inline-block;

      &:first-of-type {
        margin-left: 0;
        pading-left: 0;
      }
    `};
  ${props =>
    props.success &&
    css`
      color: #5c9210;
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font: inherit;
      padding: 10px;
      margin: 10px;
      font-weight: bold;
      display: inline-block;

      &:first-of-type {
        margin-left: 0;
        pading-left: 0;
      }
    `};
`;

export default Button;
