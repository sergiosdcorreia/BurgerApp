import React from "react";

import OrderStyled from "../../styled-components/Orders/OrderStyled";

const order = props => (
  <OrderStyled>
    <p>Ingredients: Salad (1)</p>
    <p>
      Price: <strong>£5.45</strong>
    </p>
  </OrderStyled>
);

export default order;
