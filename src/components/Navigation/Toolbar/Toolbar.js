import React from "react";

import NavigationStyled from "../../../styled-components/Navigation/NavigationStyled";
import ToolbarStyled from "../../../styled-components/Navigation/Toolbar/ToolbarStyled";
import Logo from "../../Logo/Logo";
import Hamburger from "../../../styled-components/UiStyledComponents/Menu/Hamburger/Hamburger";

import NavigationItems from "../../Navigation/NavigationItems/NavigationItems";

const Toolbar = props => (
  <ToolbarStyled>
    <Hamburger onClick={props.drawerToggleClicked} />
    <Logo height="80%" />
    <NavigationStyled>
      <NavigationItems />
    </NavigationStyled>
  </ToolbarStyled>
);

export default Toolbar;
