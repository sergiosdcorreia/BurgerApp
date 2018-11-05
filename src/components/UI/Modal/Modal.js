import React from "react";

import ModalStyled from "../../../styled-components/UiStyledComponents/Modal/ModalStyled";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <ModalStyled show={props.show}>{props.children}</ModalStyled>
  </Aux>
);

export default Modal;
