import React from "react";
import styled from "styled-components";
import { ContentWrapper } from "../components/ContentWrapper";
import { COOKIES, FIGURA } from "../images/Inventory";

const PanWrapper = styled.div`
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

const Cookies = () => {
  return (
    <>
      {COOKIES.map((cookie) => {
        return (
          <ImageWrapper>
            <PanImage src={cookie.image} alt={cookie.name} />
            <PanName>{cookie.name}</PanName>
          </ImageWrapper>
        );
      })}
    </>
  );
};

const Figura = () => {
  return (
    <>
      {FIGURA.map((item) => {
        return (
          <ImageWrapper>
            <PanImage src={item.image} alt={item.name} />
            <PanName>{item.name}</PanName>
          </ImageWrapper>
        );
      })}
    </>
  );
};

const Pan = () => {
  return (
    <ContentWrapper>
      <PanWrapper>
        <Cookies />
        <Figura />
      </PanWrapper>
    </ContentWrapper>
  );
};

export default Pan;
