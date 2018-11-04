import React from "react";

import BreadBottom from "../../../styled-components/Burger/Ingredient/BreadBottom";
import BreadTop from "../../../styled-components/Burger/Ingredient/BreadTop";

const BurgerIngredient = props => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <BreadBottom />;
      break;
    case "bread-top":
      ingredient = <BreadTop />;
  }
};

export default BurgerIngredient;
