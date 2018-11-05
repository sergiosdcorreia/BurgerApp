import React from "react";

import BackdropStyled from "../../../styled-components/UiStyledComponents/Backdrop/BackdropStyled";
const Backdrop = props =>
  props.show ? <BackdropStyled onClick={props.clicked} /> : null;

export default Backdrop;
