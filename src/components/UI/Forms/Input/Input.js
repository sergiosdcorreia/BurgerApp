import React from "react";
import InputStyled from "../../../../styled-components/UiStyledComponents/Forms/Input/InputStyled";
import InputElementStyled from "../../../../styled-components/UiStyledComponents/Forms/Input/InputElementStyled";
import LabelStyled from "../../../../styled-components/UiStyledComponents/Forms/Label/LabelStyled";
import TextAreaStyled from "../../../../styled-components/UiStyledComponents/Forms/TextArea/TextAreaStyled";
import SelectStyled from "../../../../styled-components/UiStyledComponents/Forms/Select/SelectStyled";

const Input = props => {
  let inputElement = null;

  switch (props.inputtype) {
    case "input":
      inputElement = (
        <inputStyled
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <TextAreaStyled
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <SelectStyled {...props.value}>
          {props.elementConfig.options.map(options => (
            <option
              key={options.value}
              value={options.value}
              onChange={props.changed}
            >
              {options.displayValue}
            </option>
          ))}
        </SelectStyled>
      );
      break;
    default:
      inputElement = (
        <InputStyled
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
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
