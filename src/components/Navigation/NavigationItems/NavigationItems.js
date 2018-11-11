import React from "react";

import NavigationItem from "./NavigationItem/NavgationItem";
import NavigationItemsStyled from "../../../styled-components/Navigation/NavigationItems/NavigationItemsStyled";

const NavigationItems = () => (
  <NavigationItemsStyled>
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
  </NavigationItemsStyled>
);

export default NavigationItems;
