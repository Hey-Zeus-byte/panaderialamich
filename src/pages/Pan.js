import React from "react";
import styled from "styled-components";
import { ContentWrapper } from "../components/ContentWrapper";
import happyface from "../images/happyface.png";
import display1 from "../images/display1.jpg";
import display2 from "../images/display2.jpg";
import chocochipcookie from "../images/chocochipcookie.jpeg";
import chococupcake from "../images/chococupcake.jpeg";
import crownstack from "../images/crownstack.jpeg";
import pig from "../images/pig.png";
import pinkcookie from "../images/pinkcookie.jpeg";

const PAN = [
  { name: "happy face", image: happyface },
  { name: "display one", image: display1 },
  { name: "display two", image: display2 },
  { name: "chocolate chip cookie", image: chocochipcookie },
  { name: "chocolate cupcake", image: chococupcake },
  { name: "roscas", image: crownstack },
  { name: "puerco", image: pig },
  { name: "Pink Cookie", image: pinkcookie },
];

const PanWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0;
`;

const ImageWrapper = styled.div``;

const PanImage = styled.img`
  width: 475px;
  height: 375px;
  border-radius: 20px;

  /* give a hover effect */

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

const Pan = () => {
  return (
    <ContentWrapper>
      <PanWrapper>
        {PAN.map((pan) => {
          return (
            <ImageWrapper>
              <PanImage src={pan.image} alt={pan.name} />
              <PanName>{pan.name}</PanName>
            </ImageWrapper>
          );
        })}
      </PanWrapper>
    </ContentWrapper>
  );
};

export default Pan;
