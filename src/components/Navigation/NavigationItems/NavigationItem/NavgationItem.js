import React from "react";

import NavigationItemStyled from "../../../../styled-components/Navigation/NavigationItems/NavigationItem/NavigtionItemStyled";
import NavLinkStyled from "../../../../styled-components/Navigation/NavLinkStyled";

const NavigationItem = props => (
  <NavigationItemStyled active={props.active}>
    <NavLinkStyled
      to={props.link}
      exact={props.exact}
      activeClassName={props.active}
    >
      {props.children}
    </NavLinkStyled>
  </NavigationItemStyled>
);

export default NavigationItem;
