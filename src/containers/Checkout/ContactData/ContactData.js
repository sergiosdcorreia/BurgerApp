import React, { Component } from "react";

import Button from "../../../styled-components/UiStyledComponents/Button/Button";
import Spinner from "../../../styled-components/UiStyledComponents/Spinner/Spinner";
import ContactDataStyled from "../../../styled-components/ContactDataStyled/ContactDataStyled";
import axios from "../../../axios-orders";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      //ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Sergio",
        address: {
          street: "50 Old Tiverton Road",
          zipCode: "EX46NG",
          country: "United Kingdom"
        },
        email: "sergiosdcorreia@gmail.com"
      },
      deliveryMethod: "fastest"
    };
    console.log(order);
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };
  render() {
    let form = (
      <div>
        <form>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <input type="text" name="street" placeholder="Street" />
          <input type="text" name="postal" placeholder="Postal Code" />
          <Button success onClick={this.orderHandler}>
            ORDER
          </Button>
        </form>
      </div>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <ContactDataStyled>
        <h4>Enter your Contact Data</h4>
        {form}
      </ContactDataStyled>
    );
  }
}

export default ContactData;
