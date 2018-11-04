import React from "react";

import Button from "../../../../styled-components/UiStyledComponents/Button/Button";

const BuildControl = props => (
  <div>
    <div>{props.label}</div>
    <Button less>Less</Button>
    <Button more>More</Button>
  </div>
);

export default BuildControl;
