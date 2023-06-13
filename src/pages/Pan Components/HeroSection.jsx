import React from "react";
import styled from "styled-components";
import chocolatechip from "../../images/cookies/chocochipcookie.jpeg";
import pinkCookie from "../../images/cookies/pinkcookie.jpeg";
import happyFace from "../../images/cookies/happyface.png";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const PanImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroSection = () => {
  return (
    <>
      <GridContainer>
        <GridItem style={{ gridColumn: "span 2", gridRow: "1" }}>
          <PanImage src={chocolatechip} alt="Chocolate chip cookie" />
        </GridItem>
        <GridItem style={{ gridColumn: "span 2", gridRow: "2" }}>
          <PanImage src={pinkCookie} alt="pink cookie" />
        </GridItem>
        <GridItem style={{ gridColumn: "1", gridRow: "2" }}>
          <PanImage src={happyFace} alt="happy face cookie" />
        </GridItem>
        <GridItem style={{ gridColumn: "2", gridRow: "2" }}>
          <PanImage src={chocolatechip} alt="Chocolate chip cookie" />
        </GridItem>
        <GridItem style={{ gridColumn: "3", gridRow: "1 / span 2" }}>
          <PanImage src={pinkCookie} alt="pink cookie" />
        </GridItem>
        <GridItem style={{ gridColumn: "3", gridRow: "1 / span 2" }}>
          <PanImage src={happyFace} alt="happy face cookie" />
        </GridItem>
      </GridContainer>
    </>
  );
};

export default HeroSection;
