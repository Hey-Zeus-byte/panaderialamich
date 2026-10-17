import ContactUs from "./components/ContactUs.jsx";
import AboutUs from "./components/AboutUs.jsx";
import styles from "./Home.module.scss";
import React, { useState, useEffect, useRef } from "react";
import { ContentWrapper } from "../../components/layout/ContentWrapper/ContentWrapper.jsx";
import ImageSlider from "../../components/ImageSlider/ImageSlider.jsx";
import heroVideo from "../../assets/videos/upperContainerVideo.webm";

const Home = () => {
  const [isVisible, setVisible] = useState(false);
  const [movingNumber, setMovingNumber] = useState(0);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    observer.observe(domRef.current);

    const currentDomRef = domRef.current;

    return () => {
      if (currentDomRef) observer.unobserve(currentDomRef);
    };
  }, []);

  useEffect(() => {
    let interval;
    let timeout;

    if (isVisible) {
      const startCounting = () => {
        let startValue = 0;
        const endValue = 70;
        const duration = 3000;
        const increment = Math.ceil((endValue - startValue) / (duration / 10));

        interval = setInterval(() => {
          startValue += increment;
          if (startValue >= endValue) {
            startValue = endValue;
            clearInterval(interval);
          }
          setMovingNumber(Math.min(startValue, endValue));
        }, 10);
      };

      if (window.innerWidth <= 768) {
        timeout = setTimeout(startCounting, 2250);
      } else {
        startCounting();
      }
    }

    return () => {
      clearInterval(interval);
      if (timeout) clearTimeout(timeout);
    };
  }, [isVisible]);

  return (
    <div className={styles.pageMaxContainer}>
      <ContentWrapper>
        <AboutUs />
        <div className={styles.upperContainer}>
          <video
            className={styles.backgroundVideo}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          >
            <source src={heroVideo} type="video/webm" />
          </video>
          <p
            className={`${styles.slidingText} ${styles.fadeInSection} ${isVisible ? styles.isVisible : ""}`}
            ref={domRef}
          >
            Disfruta mas de
          </p>
          <span
            className={`${styles.movingNumber} ${styles.fadeInSection} ${isVisible ? styles.isVisible : ""}`}
            ref={domRef}
          >
            {movingNumber}
          </span>
          <p
            className={`${styles.slidingText} ${styles.fadeInSection} ${isVisible ? styles.isVisible : ""}`}
            ref={domRef}
          >
            piezas de pan!
          </p>
        </div>
        <div className={styles.middleContainer}>
          <ContactUs />
          <div className={styles.sliderStylesContainer}>
            <ImageSlider />
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <p className={`${styles.text} ${styles.redText}`}>We do not offer online ordering.</p>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Home;
