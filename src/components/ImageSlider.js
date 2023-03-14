import React, { useState } from "react";
import styled from "styled-components";
import display1 from "../images/miscellaneous/display1.jpg";
import display2 from "../images/miscellaneous/display2.jpg";
import overseejello from "../images/miscellaneous/overseejello.jpeg";
import cakeincup from "../images/miscellaneous/cakeincup.jpeg";
import fruitcake from "../images/miscellaneous/fruitcake.jpeg";

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
    url: overseejello,
    title: "Jello",
  },
  {
    url: cakeincup,
    title: "cakeincup",
  },
  {
    url: fruitcake,
    title: "fruitcake",
  },
];

const ImageContainer = styled.div`
  height: "100%";
  position: "relative";
  cursor: pointer;
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

const ImageSlider = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

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
