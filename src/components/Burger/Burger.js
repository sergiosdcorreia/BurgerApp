import React from "react";

import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient";

import StyledBurger from "../../styled-components/Burger/StyledBurger";

const Burger = props => {
  return (
    <StyledBurger>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </StyledBurger>
  );
};

export default Burger;
