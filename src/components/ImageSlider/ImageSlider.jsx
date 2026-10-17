import { slides } from "../../data/slides.js";
import styles from "./ImageSlider.module.scss";
import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const ImageSlider = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const SWIPE_THRESHOLD = 50;

  const goToNext = () => {
    setCurrentIdx((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrevious = () => {
    setCurrentIdx((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
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
      <button
        type="button"
        className={`${styles.arrowButton} ${styles.leftArrow}`}
        aria-label="Previous photo"
        onClick={goToPrevious}
      >
        <FontAwesomeIcon className={styles.arrowIcon} icon={faArrowLeft} />
      </button>
      <div
        className={styles.image}
        style={{ "--slide-image": `url(${slides[currentIdx].url})` }}
        role="img"
        aria-label={`Bakery photo ${currentIdx + 1} of ${slides.length}`}
      />
      <button
        type="button"
        className={`${styles.arrowButton} ${styles.rightArrow}`}
        aria-label="Next photo"
        onClick={goToNext}
      >
        <FontAwesomeIcon className={styles.arrowIcon} icon={faArrowRight} />
      </button>
    </div>
  );
};

export default ImageSlider;
