import React, { Component } from "react";

import ModalStyled from "../../../styled-components/UiStyledComponents/Modal/ModalStyled";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <ModalStyled show={this.props.show}>{this.props.children}</ModalStyled>
      </Aux>
    );
  }
}

export default Modal;
