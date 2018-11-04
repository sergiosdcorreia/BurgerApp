import React from "react";

import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient";

import StyledBurger from "../../styled-components/Burger/StyledBurger";

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add ingredients!</p>;
  }

  return (
    <StyledBurger>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </StyledBurger>
  );
};

export default Burger;
