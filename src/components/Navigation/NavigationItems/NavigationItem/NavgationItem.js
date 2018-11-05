import React from "react";

import NavigationItemStyled from "../../../../styled-components/Navigation/NavigationItems/NavigationItem/NavigtionItemStyled";

const NavigationItem = props => (
  <NavigationItemStyled active={props.active}>
    <a href={props.link}>{props.children}</a>
  </NavigationItemStyled>
);

export default NavigationItem;
