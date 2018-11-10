import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

import SideDrawerStyled from "../../../styled-components/Navigation/SideDrawer/SideDrawerStyled";

const SideDrawer = props => {
  // ...

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <SideDrawerStyled open={props.open}>
        <Logo height="11%" />
        <nav>
          <NavigationItems />
        </nav>
      </SideDrawerStyled>
    </Aux>
  );
};

export default SideDrawer;
