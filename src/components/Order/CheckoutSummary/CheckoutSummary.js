import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../../styled-components/UiStyledComponents/Button/Button";
import CheckoutSummaryStyled from "../../../styled-components/UiStyledComponents/Order/CheckoutSummaryStyled/CheckoutSummaryStyled";

const CheckoutSummary = props => {
  return (
    <CheckoutSummaryStyled>
      <h1>Enjoy!</h1>
      <div style={{ width: "100%", height: "300px", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button danger>Cancel</Button>
      <Button success>Continue</Button>
    </CheckoutSummaryStyled>
  );
};

export default CheckoutSummary;
