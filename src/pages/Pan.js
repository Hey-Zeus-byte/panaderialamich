import React, { useState } from "react";
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
const Hero = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
`;

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

const PanSearch = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
  font-size: 16px;
  transition: all 0.3s ease;
  margin: 0 150px;

  @media only screen and (max-width: 768px) {
    margin: 0 70px;
  }

  &:focus {
    outline: none;
    border-color: blue;
    box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
  }
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

const Cookies = ({ cookies }) => {
  return (
    <>
      {cookies.map((cookie) => {
        return (
          <ImageWrapper key={cookie.name}>
            <PanImage src={cookie.image} alt={cookie.name} tabIndex="0" />
            <PanName>{cookie.name}</PanName>
          </ImageWrapper>
        );
      })}
    </>
  );
};

const Misc = ({ misc }) => {
  return (
    <>
      {misc.map((item) => {
        return (
          <ImageWrapper key={item.name}>
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
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCookies = COOKIES.filter((cookie) =>
    cookie.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredMisc = MISC.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ContentWrapper>
      <Hero>
        <Title>Pan</Title>
        <PanSearch
          type="text"
          placeholder="Search Pan..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search"
        />
      </Hero>
      <PanWrapper>
        <Cookies cookies={filteredCookies} />
        <Misc misc={filteredMisc} />
        {/* <Figura /> */}
      </PanWrapper>
      <TextWrapper>
        <Title className="responsive-text">More photos coming soon</Title>
      </TextWrapper>
    </ContentWrapper>
  );
};

export default Pan;
