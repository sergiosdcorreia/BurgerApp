import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  BreadBottom,
  BreadTop,
  Seeds1,
  Seeds2,
  Meat,
  Cheese,
  Salad,
  Bacon
} from "../../../styled-components/Burger/Ingredient/Ingredients";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <BreadBottom />;
        break;
      case "bread-top":
        ingredient = (
          <BreadTop>
            <Seeds1 />
            <Seeds2 />
          </BreadTop>
        );
        break;
      case "meat":
        ingredient = <Meat />;
        break;
      case "cheese":
        ingredient = <Cheese />;
        break;
      case "Salad":
        ingredient = <Salad />;
        break;
      case "bacon":
        ingredient = <Bacon />;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

BurgerIngredient.PropTypes = {
  type: PropTypes.string.isrequired
};

export default BurgerIngredient;
