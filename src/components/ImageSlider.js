import React, { useState } from "react";
import styled from "styled-components";
import display1 from "../images/display1.jpg";
import display2 from "../images/display2.jpg";
import chocochipcookie from "../images/chocochipcookie.jpeg";
import chococupcake from "../images/chococupcake.jpeg";
import crownstack from "../images/crownstack.jpeg";
import pig from "../images/pig.png";
import pinkcookie from "../images/pinkcookie.jpeg";

const slides = [
  {
    url: display1,
    title: "display1",
  },
  {
    url: display2,
    title: "display2",
  },
  {
    url: chocochipcookie,
    title: "chocochipcookie",
  },
  {
    url: chococupcake,
    title: "chococupcake",
  },
  {
    url: crownstack,
    title: "crownstack",
  },
  {
    url: pig,
    title: "pig",
  },
  {
    url: pinkcookie,
    title: "pinkcookie",
  },
];

const ImageContainer = styled.div`
  height: "100%";
  position: "relative";
`;

const Image = styled.div`
  width: 900px;
  height: 100%;
  border-radius: 10px;
  background-position: center;
  background-size: cover;
  background-image: ${(props) => `url(${slides[props.current].url})`};

  @media only screen and (max-width: 1250px) {
    width: 700px;
    height: 90%;
  }

  @media only screen and (max-width: 768px) {
    width: 550px;
  }

  @media only screen and (max-width: 590px) {
    width: 490px;
  }

  @media only screen and (max-width: 500px) {
    width: 435px;
  }

  @media only screen and (max-width: 475px) {
    width: 374px;
  }
`;

// const LeftArrow = styled.div`
//   position: absolute;
//   top: 85%;
//   transform: translate(0, -50%);
//   right: 1225px;
//   font-size: 45px;
//   color: lightgreen;
//   z-index: 1;
//   cursor: pointer;

//   @media only screen and (max-width: 768px) {
//     right: 610px;
//     font-size: 40px;
//     top: 82%;
//   }

//   @media only screen and (max-width: 600px) {
//     right: 465px;
//     font-size: 35px;
//     top: 95%;
//   }

//   @media only screen and (max-width: 500px) {
//     right: 725px;
//     font-size: 30px;
//     top: 85%;
//   }

//   @media only screen and (max-width: 475px) {
//     right: 525px;
//     font-size: 25px;
//     top: 85%;
//   }
// `;

// const RightArrow = styled.div`
//   position: absolute;
//   top: 85%;
//   transform: translate(0, -50%);
//   right: 450px;
//   font-size: 45px;
//   color: lightgreen;
//   z-index: 1;
//   cursor: pointer;

//   @media only screen and (max-width: 768px) {
//     right: 130px;
//     font-size: 40px;
//     top: 82%;
//   }

//   @media only screen and (max-width: 600px) {
//     right: 70px;
//     font-size: 35px;
//     top: 95%;
//   }

//   @media only screen and (max-width: 500px) {
//     right: 250px;
//     font-size: 30px;
//     top: 85%;
//   }

//   @media only screen and (max-width: 475px) {
//     right: 200px;
//     font-size: 25px;
//     top: 85%;
//   }
// `;

const ImageSlider = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  //   const goToPrevious = () => {
  //     const isFirstSlide = currentIdx === 0;
  //     const newIndex = isFirstSlide ? slides.length - 1 : currentIdx - 1;
  //     setCurrentIdx(newIndex);
  //   };

  const goToNext = () => {
    const isLastSlide = currentIdx === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIdx + 1;
    setCurrentIdx(newIndex);
  };

  return (
    <ImageContainer>
      <Image current={currentIdx} onClick={goToNext} />
    </ImageContainer>
  );
};

export default ImageSlider;
