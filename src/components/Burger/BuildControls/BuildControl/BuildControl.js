import React from "react";

import Button from "../../../../styled-components/UiStyledComponents/Button/Button";
import Label from "../../../../styled-components/UiStyledComponents/Button/Label";

import StyledBuildControl from "../../../../styled-components/Burger/BuildControls/BuildControl/StyledBuildControl";

const BuildControl = props => (
  <StyledBuildControl>
    <Label>{props.label}</Label>
    <Button less onClick={props.removed} disabled={props.disabled}>
      Less
    </Button>
    <Button more onClick={props.added}>
      More
    </Button>
  </StyledBuildControl>
);

export default BuildControl;
