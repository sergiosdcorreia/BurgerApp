import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

const NavLinkStyled = styled(NavLink).attrs({
  activeClassName: activeClassName
})`
  &.${activeClassName} {
    color: #40a4c8;

    @media (min-width: 500px) {
      background-color: #8f5c2c;
      border-bottom: 4px solid #40a4c8;
      color: white;
    }
  }
`;

export default NavLinkStyled;
