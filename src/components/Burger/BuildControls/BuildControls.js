import React from "react";

import BuildControl from "./BuildControl/BuildControl";

import StyledBuildControls from "../../../styled-components/Burger/BuildControls/StyledBuildControls";
import OrderButton from "../../../styled-components/UiStyledComponents/Button/OrderButton";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => (
  <StyledBuildControls>
    <p>
      Current Price: <strong>£{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <OrderButton disabled={!props.purchasable}>ORDER NOW</OrderButton>
  </StyledBuildControls>
);

export default BuildControls;
