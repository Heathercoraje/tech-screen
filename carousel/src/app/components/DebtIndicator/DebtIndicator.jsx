import React from "react";
import styled from "styled-components";

const SmallText = styled.p`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 5px;
  @media only screen and (min-width: 768px) {
    font-size: 1.8rem;
  }
  @media only screen and (min-width: 992px) {
    font-size: 1.8rem;
  }
`;

const BigText = styled.p`
  font-size: 4rem;
  color: lightskyblue;
  font-weight: bolder;
  margin-bottom: 5px;
  font-size: 2rem;

  @media only screen and (min-width: 330px) {
    font-size: 3rem;
  }
  @media only screen and (min-width: 992px) {
    font-size: 3.5rem;
  }
`;

const DebtIndicator = props => {
  return (
    <div
      className="container-circle"
      style={{ width: props.size, height: props.size }}
    >
      <div className="container-text">
        <SmallText>Your long term debt total</SmallText>
        <BigText> &pound; {props.debt}</BigText>
        <SmallText>Total credit limit 0</SmallText>
      </div>
    </div>
  );
};

export default DebtIndicator;
