import React from "react";

import OrderStyled from "../../styled-components/Orders/OrderStyled";

const order = props => {
  const ingredients = [];
  // transforming object into an array
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredients.map(ig => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <OrderStyled>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>£{props.price.toFixed(2)}</strong>
      </p>
    </OrderStyled>
  );
};

export default order;
