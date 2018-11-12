import React from "react";
import InputStyled from "../../../../styled-components/UiStyledComponents/Forms/Input/InputStyled";
import InputElementStyled from "../../../../styled-components/UiStyledComponents/Forms/Input/InputElementStyled";
import LabelStyled from "../../../../styled-components/UiStyledComponents/Forms/Label/LabelStyled";
import TextAreaStyled from "../../../../styled-components/UiStyledComponents/Forms/TextArea/TextAreaStyled";

const Input = props => {
  let inputElement = null;

  switch (props.inputtype) {
    case "input":
      inputElement = (
        <inputStyled {...props.elementConfig} value={props.value} />
      );
      break;
    case "textarea":
      inputElement = (
        <TextAreaStyled {...props.elementConfig} value={props.value} />
      );
      break;
    // case ('select'):
    //   inputElement = <SelectStyled />
    default:
      inputElement = (
        <InputStyled {...props.elementConfig} value={props.value} />
      );
  }

  return (
    <InputElementStyled>
      <LabelStyled>{props.label}</LabelStyled>
      {inputElement}
    </InputElementStyled>
  );
};

export default Input;
