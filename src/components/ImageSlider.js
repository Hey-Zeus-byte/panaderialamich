import React, { useState } from "react";
import styled from "styled-components";
import display1 from "../images/miscellaneous/display1.jpg";
import display2 from "../images/miscellaneous/display2.jpg";
import overseejello from "../images/miscellaneous/overseejello.jpeg";
import cakeincup from "../images/miscellaneous/cakeincup.jpeg";
import fruitcake from "../images/miscellaneous/fruitcake.jpeg";
import fruitBaskets from "../images/miscellaneous/fruit-baskets.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

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
  {
    url: fruitBaskets,
    title: "fruit-baskets",
  },
];

const ImageContainer = styled.div`
  height: 100%;
  position: relative;
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

  @media only screen and (max-width: 400px) {
    width: 275px;
  }
`;

const ArrowIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 32px;
  color: #ffffff;
  cursor: pointer;
`;

const LeftArrowIcon = styled(ArrowIcon)`
  left: 24px;
  &:focus {
    outline: 2px solid blue;
  }
`;

const RightArrowIcon = styled(ArrowIcon)`
  right: 24px;
  &:focus {
    outline: 2px solid blue;
  }
`;

const ImageSlider = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const goToNext = () => {
    const isLastSlide = currentIdx === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIdx + 1;
    setCurrentIdx(newIndex);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIdx === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIdx - 1;
    setCurrentIdx(newIndex);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target === leftArrowRef.current) {
        goToPrevious();
      } else if (e.target === rightArrowRef.current) {
        goToNext();
      }
    }
  };

  const leftArrowRef = React.createRef();
  const rightArrowRef = React.createRef();

  return (
    <ImageContainer>
      <LeftArrowIcon
        icon={faArrowLeft}
        onClick={goToPrevious}
        tabIndex="0"
        onKeyDown={handleKeyDown}
        ref={leftArrowRef}
      />
      <Image current={currentIdx} />
      <RightArrowIcon
        icon={faArrowRight}
        onClick={goToNext}
        tabIndex="0"
        onKeyDown={handleKeyDown}
        ref={rightArrowRef}
      />
    </ImageContainer>
  );
};
export default ImageSlider;
