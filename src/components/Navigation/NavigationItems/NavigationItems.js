import React from "react";

import NavigationItem from "./NavigationItem/NavgationItem";
import NavigationItemsStyled from "../../../styled-components/Navigation/NavigationItems/NavigationItemsStyled";

const NavigationItems = () => (
  <NavigationItemsStyled>
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </NavigationItemsStyled>
);

export default NavigationItems;
