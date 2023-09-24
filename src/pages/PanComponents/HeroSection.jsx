import React from "react";
import styled from "styled-components";
import chocolatechip from "../../images/cookies/chocochipcookie.jpeg";
import pinkCookie from "../../images/cookies/pinkcookie.jpeg";
import happyFace from "../../images/cookies/happyface.png";

const HeroGridContainer = styled.div`
  display: flex;
  margin: 0 80px;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 20px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 10px;
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
    <HeroGridContainer>
      <GridContainer>
        <GridItem style={{ gridColumn: "span 2", gridRow: "1" }}>
          <PanImage src={chocolatechip} alt="Chocolate chip cookie" />
        </GridItem>
        <GridItem style={{ gridColumn: "1", gridRow: "2" }}>
          <PanImage src={happyFace} alt="happy face cookie" />
        </GridItem>
        <GridItem style={{ gridColumn: "2", gridRow: "2" }}>
          <PanImage src={chocolatechip} alt="Chocolate chip cookie" />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem style={{ gridColumn: "1", gridRow: "1" }}>
          <PanImage src={pinkCookie} alt="pink cookie" />
        </GridItem>
        <GridItem style={{ gridColumn: "2", gridRow: "1" }}>
          <PanImage src={pinkCookie} alt="pink cookie" />
        </GridItem>
        <GridItem style={{ gridColumn: "span 2", gridRow: "2" }}>
          <PanImage src={happyFace} alt="happy face cookie" />
        </GridItem>
      </GridContainer>
    </HeroGridContainer>
  );
};

export default HeroSection;
