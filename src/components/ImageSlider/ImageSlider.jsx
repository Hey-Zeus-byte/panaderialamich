import { slides } from "../../data/slides.js";
import styles from "./ImageSlider.module.scss";
import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

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
    <div
      className={styles.imageContainer}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <FontAwesomeIcon
        className={`${styles.arrowIcon} ${styles.leftArrowIcon}`}
        icon={faArrowLeft}
        onClick={goToPrevious}
        tabIndex="0"
        onKeyDown={handleKeyDown}
        ref={leftArrowRef}
      />
      <div
        className={styles.image}
        style={{ "--slide-image": `url(${slides[currentIdx].url})` }}
      />
      <FontAwesomeIcon
        className={`${styles.arrowIcon} ${styles.rightArrowIcon}`}
        icon={faArrowRight}
        onClick={goToNext}
        tabIndex="0"
        onKeyDown={handleKeyDown}
        ref={rightArrowRef}
      />
    </div>
  );
};

export default ImageSlider;
