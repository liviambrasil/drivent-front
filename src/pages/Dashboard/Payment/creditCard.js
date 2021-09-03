import React from "react";
import "react-credit-cards/es/styles-compiled.css";
//import "react-credit-cards/lib/styles.scss"
import Cards from "react-credit-cards";
import styled from "styled-components";
 
export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "Your name",
    number: "",
  };
 
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const int = parseInt(e.target.alt);
    this.props.isComplete[`${e.target.name}`]=e.target.value;
    
    if(e.target.value.length > int) {
      return;
    }

    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <CreditCardContainer id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <Form>
        	<CardNumber
            type="tel"
            alt="19"
            name="card"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <p> Eg: 12...,34...,34...,56...</p>
          <Name
            type="tel"
            name="name"
            placeholder="Your name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <div>
            <ExpiryDate
              type="tel"
              name="expiry"
              placeholder="expiry date"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <CVC
              type="tel"
              alt="3"
              name="cvc"
              placeholder="CVC"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </div>
        </Form>
      </CreditCardContainer>
    );
  }
}

const CardNumber=styled.input`
    width: 300px;
    height: 40px;
    border-radius: 5px;
    

    
`;

const Name=styled.input`
width:300px;
height: 40px;
border-radius: 5px;
margin-top:20px;

`;

const ExpiryDate=styled.input`
width: 200px;
height: 40px;
border-radius: 5px;
    
`;

const CVC=styled.input`
width: 80px;
height: 40px;
border-radius: 5px;
`;

const CreditCardContainer = styled.div`
    display:flex;   
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 180px;
    margin-left: 20px;

    div{
        display: flex;
        justify-content: space-between;
    }
`;
