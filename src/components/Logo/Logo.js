import React from "react";

import BurgerLogo from "../../assets/images/burger-logo.png";
import LogoStyled from "../../styled-components/UiStyledComponents/Logo/LogoStyled";

const Logo = props => (
  <LogoStyled style={{ height: props.height }}>
    <img src={BurgerLogo} alt="My Burger" />
  </LogoStyled>
);

export default Logo;
