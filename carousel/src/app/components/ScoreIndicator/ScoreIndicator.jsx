import React from "react";
import styled from "styled-components";

const SmallText = styled.p`
  font-size: 1.3rem;
  color: #fff;
  margin-bottom: 3px;
  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 992px) {
    font-size: 1.8rem;
  }
`;

const BigText = styled.p`
  font-size: 4em;
  color: lightskyblue;
  font-weight: bolder;
  margin-bottom: 3px;
  font-size: 2rem;
  @media only screen and (min-width: 300px) {
    font-size: 3rem;
  }
  @media only screen and (min-width: 992px) {
    font-size: 3.5rem;
  }
`;

const ScoreIndicator = props => {
  const size = props.size;
  return (
    <div className="container-circle" style={{ width: size, height: size }}>
      <div className="container-text">
        <SmallText>Your credit score is</SmallText>
        <BigText>{props.score}</BigText>
        <SmallText>out of 700</SmallText>
      </div>
    </div>
  );
};

export default ScoreIndicator;
