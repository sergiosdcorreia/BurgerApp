import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

import SideDrawerStyled from "../../../styled-components/Navigation/SideDrawer/SideDrawerStyled";

const SideDrawer = props => {
  // ...

  return (
    <SideDrawerStyled>
      <Logo height="11%" />
      <nav>
        <NavigationItems />
      </nav>
    </SideDrawerStyled>
  );
};

export default SideDrawer;
