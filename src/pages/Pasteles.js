import React from "react";
import styled from "styled-components";
import { ContentWrapper } from "../components/ContentWrapper";
import tresleches from "../images/cakes/tresleches.jpg";
import treslecheswfruit from "../images/cakes/treslecheswfruit.jpeg";
import coffeecake from "../images/cakes/coffeecake.jpg";
import flan from "../images/cakes/flan.jpeg";

const CAKES = [
  {
    name: "Vanilla Tres Leches",
    image: tresleches,
  },
  {
    name: "Coffee Tres Leches",
    image: coffeecake,
  },
  {
    name: "Vanilla Tres Leches with Fruit",
    image: treslecheswfruit,
  },

  {
    name: "Flan",
    image: flan,
  },
];

const CakeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0;
`;

const ImageWrapper = styled.div`
  cursor: pointer;
`;

const PanImage = styled.img`
  width: 475px;
  height: 375px;
  border-radius: 20px;

  &:hover,
  :focus {
    width: 655px;
    height: 525px;
  }

  @media only screen and (max-width: 1250px) {
    width: 425px;
    height: 325px;
  }

  @media only screen and (max-width: 840px) {
    width: 355px;
    height: 295px;
  }

  @media only screen and (max-width: 500px) {
    width: 285px;
    height: 215px;
  }
`;

const PanName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  line-height: 1px;

  @media only screen and (max-width: 1250px) {
    font-size: 26px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const Title = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  font-family: snell roundhand, cursive;
  margin: 10px 0;
  text-shadow: -1px 1px 10px #000;
`;

const TextWrapper = styled.div`
  .responsive-text {
    @media only screen and (max-width: 768px) {
      font-size: 30px;
      font-weight: 700;
      padding: 20px 0;
    }
  }
`;

const Pasteles = () => {
  return (
    <ContentWrapper>
      <Title>Pasteles</Title>
      <CakeWrapper>
        {CAKES.map((cake) => {
          return (
            <ImageWrapper>
              <PanImage src={cake.image} alt={cake.name}></PanImage>
              <PanName>{cake.name}</PanName>
            </ImageWrapper>
          );
        })}
      </CakeWrapper>
      <TextWrapper>
        <Title className="responsive-text">More photos coming soon</Title>
      </TextWrapper>
    </ContentWrapper>
  );
};

export default Pasteles;