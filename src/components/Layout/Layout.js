import React from "react";

import Aux from "../../hoc/Aux";
import Content from "../../styled-components/Layout/Content";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = props => (
  <Aux>
    <Toolbar />
    <Content>{props.children}</Content>
  </Aux>
);

export default Layout;
