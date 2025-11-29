import React, { useState, useRef } from "react";
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
import { pxv } from "../styles/pxv";

const slides = [
  { url: display1, title: "display1" },
  { url: display2, title: "display2" },
  { url: overseejello, title: "Jello" },
  { url: cakeincup, title: "cakeincup" },
  { url: fruitcake, title: "fruitcake" },
  { url: fruitBaskets, title: "fruit-baskets" },
];

const ImageContainer = styled.div`
  width: ${pxv(950)};
  aspect-ratio: 4 / 3;
  position: relative;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: ${pxv(1250)};
  }
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${slides[props.current].url})`};
`;

const ArrowIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: ${pxv(32)};
  color: #ffffff;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    font-size: ${pxv(48)};
  }
`;

const LeftArrowIcon = styled(ArrowIcon)`
  left: 24px;
`;

const RightArrowIcon = styled(ArrowIcon)`
  right: 24px;
`;

const ImageSlider = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const SWIPE_THRESHOLD = 50;

  const goToNext = () => {
    setCurrentIdx((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrevious = () => {
    setCurrentIdx((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
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

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current == null || touchEndX.current == null) return;

    const distance = touchStartX.current - touchEndX.current;

    if (distance > SWIPE_THRESHOLD) {
      goToNext();
    } else if (distance < -SWIPE_THRESHOLD) {
      goToPrevious();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <ImageContainer
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
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
