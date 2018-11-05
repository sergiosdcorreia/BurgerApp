import React from "react";

import ModalStyled from "../../../styled-components/UiStyledComponents/Modal/ModalStyled";

const Modal = props => (
  <ModalStyled show={props.show}>{props.children}</ModalStyled>
);

export default Modal;
