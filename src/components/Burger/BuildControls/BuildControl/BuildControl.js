import React from "react";

import Button from "../../../../styled-components/UiStyledComponents/Button/Button";
import Label from "../../../../styled-components/UiStyledComponents/Button/Label";

const BuildControl = props => (
  <div>
    <Label>{props.label}</Label>
    <Button less onClick={props.removed} disabled={props.disabled}>
      Less
    </Button>
    <Button more onClick={props.added}>
      More
    </Button>
  </div>
);

export default BuildControl;
