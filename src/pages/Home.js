import React, { useState, useEffect, useRef } from "react";
import { ContentWrapper } from "../components/ContentWrapper";
import styled from "styled-components";
import lobby from "../images/miscellaneous/lobby.jpg";
import { openGoogleMaps } from "../components/Map";
import ImageSlider from "../components/ImageSlider";
import { pxv } from "../styles/pxv";
import { tablet } from "../styles/media";
import heroVideo from "../videos/upperContainerVideo.webm";

const PageMaxContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${pxv(12)};
`;

const Text = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: ${pxv(32)};
  margin: 5px;

  @media only screen and (max-width: 768px) {
    font-size: ${pxv(48)};
  }
`;

const WeightText = styled(Text)`
  font-weight: 800;
`;

const RedText = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: ${pxv(48)};
  margin: 5px;
  color: #8d2424;
  text-align: center;

  ${tablet`
    font-size: ${pxv(64)};
  `}
`;

const WelcomeCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 2px black;
  text-shadow: -2px 2px 20px #000, 2px 2px 4px #000, 2px -2px 0 #000,
    -2px -2px 0 #000;
  border-radius: 30%;
  height: ${pxv(140)};
  margin-bottom: ${pxv(48)};

  ${tablet`
    height: unset
  `}
`;

const Welcome = styled.h1`
  color: goldenrod;
  font-family: snell roundhand, cursive;
  font-size: ${pxv(180)};
  overflow: hidden;
  margin: ${pxv(12)} 0;

  span {
    opacity: 0;
    overflow: hidden;
    animation: slideIn 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  }

  span:nth-child(1) {
    animation-delay: 0s;
  }
  span:nth-child(2) {
    animation-delay: 0.05s;
  }
  span:nth-child(3) {
    animation-delay: 0.1s;
  }
  span:nth-child(4) {
    animation-delay: 0.15s;
  }
  span:nth-child(5) {
    animation-delay: 0.2s;
  }
  span:nth-child(6) {
    animation-delay: 0.25s;
  }
  span:nth-child(7) {
    animation-delay: 0.3s;
  }
  span:nth-child(8) {
    animation-delay: 0.35s;
  }
  span:nth-child(9) {
    animation-delay: 0.4s;
  }
  span:nth-child(10) {
    animation-delay: 0.45s;
  }
  span:nth-child(11) {
    animation-delay: 0.5s;
  }

  @keyframes slideIn {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media only screen and (max-width: 768px) {
    font-size: ${pxv(200)};
  }
`;

const AboutUsWrapper = styled.div`
  position: relative;
  background-color: #b9d5d9;
  background-image: url(${lobby});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  object-fit: contain;
  background-blend-mode: multiply;
  padding: ${pxv(120)} 0;
  height: 50vh;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 5%;
    pointer-events: none;

    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
  }

  @media (min-width: 769px) and (max-width: 1240px) {
    height: 30vh;
    background-position: 50% 0%;
  }

  @media only screen and (max-width: 768px) {
    padding-top: 50px;
    height: unset;
  }
`;

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  gap: 20px;
  overflow: hidden;
  margin-top: -50px;

  .about-us {
    font-size: ${pxv(48)};
    text-align: center;
    font-weight: 800;
    margin: 0;
    margin-top: 30px;
    color: #f0fff0;
    text-shadow: -3px 3px 30px #000, 3px 3px 4px #000, 2px -2px 0 #000,
      -1px -1px 0 #000;
    cursor: pointer;
    opacity: 0;
    font-family: Inter;
    animation: slideIn 1s cubic-bezier(0.23, 1, 0.32, 1) 1s forwards;

    @keyframes slideIn {
      0% {
        transform: translateY(-100%);
        opacity: 0;
      }

      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @media only screen and (max-width: 768px) {
      font-size: ${pxv(56)};
      line-height: 30px;
    }

    @media only screen and (max-width: 480px) {
      line-height: 24px;
    }
  }
`;

const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: ${pxv(64)};
    padding: 0 ${pxv(80)};
  }
`;

const BackgroundVideo = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 14%;
  z-index: 0;
  pointer-events: none;
  filter: brightness(0.5);
`;

const UpperContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: ${pxv(200)} 0;
  color: #fbeeeeff;
  text-shadow: -1px 1px 10px #000, 1px 1px 2px #000, 1px -1px 0 #000,
    -1px -1px 0 #000;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: -1px;
    height: 10%;
    pointer-events: none;
    z-index: 1;

    background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 10%;
    pointer-events: none;
    z-index: 1;

    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );
  }

  .fade-in-section {
    opacity: 0;
    transform: translateY(20vh);
    visibility: hidden;
    transition: opacity 1.6s ease-out, transform 2s ease-out;
    will-change: opacity, visibility;
  }

  .fade-in-section.is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
    padding: ${pxv(20)} 0;
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    padding: ${pxv(160)} 0;
  }
`;

const SlidingText = styled.p`
  font-size: ${pxv(80)};
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: ${pxv(64)};
  }
`;

const MovingNumber = styled.span`
  font-size: ${pxv(140)};
  font-weight: 900;
  color: #008000;
  text-shadow: -1px 1px 10px #000, 1px 1px 2px #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
`;

const MiddleContainer = styled.div`
  padding-top: ${pxv(140)};
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-evenly;
  gap: ${pxv(80)};
  align-items: center;
  width: 100%;
  overflow: hidden;

  @media only screen and (max-width: 1240px) {
    flex-direction: column-reverse;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const SliderStylesContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const AboutUs = () => {
  const [translation, setTranslation] = useState(true);

  return (
    <AboutUsWrapper>
      <WelcomeCon>
        <Welcome>
          {"Bienvenidos".split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </Welcome>
      </WelcomeCon>
      <AboutUsContainer>
        {translation ? (
          <Text
            className="about-us"
            onClick={() => setTranslation(!translation)}
          >
            Empresa familiar que ha estado sirviendo felizmente a la comunidad
            de Modesto durante más de 20+ años. Ven a visitarnos para recordar
            el olor y el sabor de la auténtica repostería mexicana. Ayúdanos a
            continuar nuestra tradición y cultura expandiendo el conocimiento a
            la siguiente generación.
          </Text>
        ) : (
          <Text
            className="about-us"
            onClick={() => setTranslation(!translation)}
          >
            Family Business thats been happily serving the Modesto community for
            more than 20+ years. Come visit us to reminisce in the scent and
            taste of authentic Mexican pastries. Help us continue our tradition
            and culture by expanding the knowledge to the following generation.
          </Text>
        )}
      </AboutUsContainer>
    </AboutUsWrapper>
  );
};

const ContactUs = () => {
  return (
    <ContactUsContainer>
      <div>
        <div>
          <WeightText>Address:</WeightText>
          <Text onClick={openGoogleMaps} style={{ cursor: "pointer" }}>
            3801 Yosemite Boulevard, Suite B
          </Text>
          <Text>Modesto, CA 95357</Text>
          <WeightText>Phone:</WeightText>
          <Text>209-578-3599</Text>
        </div>
        <div>
          <WeightText>Business Hours:</WeightText>
          <Text>Monday: Closed</Text>
          <Text>Tuesday - Saturday: 7am - 7pm</Text>
          <Text>Sunday: 7am - 1pm</Text>
        </div>
      </div>
    </ContactUsContainer>
  );
};

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
    <PageMaxContainer>
      <ContentWrapper>
        <AboutUs />
        <UpperContainer>
          <BackgroundVideo autoPlay muted loop playsInline aria-hidden="true">
            <source src={heroVideo} type="video/webm" />
          </BackgroundVideo>
          <SlidingText
            className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
            ref={domRef}
          >
            Disfruta mas de
          </SlidingText>
          <MovingNumber
            className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
            ref={domRef}
          >
            {movingNumber}
          </MovingNumber>
          <SlidingText
            className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
            ref={domRef}
          >
            piezas de pan!
          </SlidingText>
        </UpperContainer>
        <MiddleContainer>
          <ContactUs />
          <SliderStylesContainer>
            <ImageSlider />
          </SliderStylesContainer>
        </MiddleContainer>
        <BottomContainer>
          <RedText>We do not offer online ordering.</RedText>
        </BottomContainer>
      </ContentWrapper>
    </PageMaxContainer>
  );
};

export default Home;
