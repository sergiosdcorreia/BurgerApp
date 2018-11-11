import React, { Component } from "react";

import Button from "../../../styled-components/UiStyledComponents/Button/Button";
import ContactDataStyled from "../../../styled-components/ContactDataStyled/ContactDataStyled";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    }
  };

  render() {
    return (
      <ContactDataStyled>
        <h4>Enter your Contact Data</h4>
        <form>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <input type="text" name="street" placeholder="Street" />
          <input type="text" name="postal" placeholder="Postal Code" />
          <Button success>ORDER</Button>
        </form>
      </ContactDataStyled>
    );
  }
}

export default ContactData;
