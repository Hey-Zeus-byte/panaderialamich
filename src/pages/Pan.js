import React from "react";
import styled from "styled-components";
import { ContentWrapper } from "../components/ContentWrapper";
import { COOKIES, MISC } from "../images/Inventory";

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

  &:focus {
    outline: 2px solid blue;
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

const Cookies = () => {
  return (
    <>
      {COOKIES.map((cookie) => {
        return (
          <ImageWrapper>
            <PanImage src={cookie.image} alt={cookie.name} tabIndex="0" />
            <PanName>{cookie.name}</PanName>
          </ImageWrapper>
        );
      })}
    </>
  );
};

const Misc = () => {
  return (
    <>
      {MISC.map((item) => {
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

// const Figura = () => {
//   return (
//     <>
//       {FIGURA.map((item) => {
//         return (
//           <ImageWrapper>
//             <PanImage src={item.image} alt={item.name} />
//             <PanName>{item.name}</PanName>
//           </ImageWrapper>
//         );
//       })}
//     </>
//   );
// };

const Pan = () => {
  return (
    <ContentWrapper>
      <Title>Pan</Title>
      <PanWrapper>
        <Cookies />
        <Misc />
        {/* <Figura /> */}
      </PanWrapper>
      <TextWrapper>
        <Title className="responsive-text">More photos coming soon</Title>
      </TextWrapper>
    </ContentWrapper>
  );
};

export default Pan;
