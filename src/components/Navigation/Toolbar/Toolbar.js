import React from "react";

import NavigationStyled from "../../../styled-components/Navigation/NavigationStyled";
import ToolbarStyled from "../../../styled-components/Navigation/Toolbar/ToolbarStyled";
import Logo from "../../Logo/Logo";

const Toolbar = props => (
  <ToolbarStyled>
    <div>MENU</div>
    <Logo />
    <NavigationStyled>...</NavigationStyled>
  </ToolbarStyled>
);

export default Toolbar;
