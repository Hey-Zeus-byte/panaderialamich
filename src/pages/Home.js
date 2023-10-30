import React, { useState, useEffect, useRef } from "react";
import { ContentWrapper } from "../components/ContentWrapper";
import styled from "styled-components";
import lobby from "../images/miscellaneous/lobby.jpg";
import { openGoogleMaps } from "../components/Map";
import ImageSlider from "../components/ImageSlider";
// import HeroSection from "./PanComponents/HeroSection";

const Text = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 30px;
  margin: 5px;

  @media only screen and (max-width: 1250px) {
    font-size: 25px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 18px;
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
  font-size: 60px;
  margin: 5px;
  color: #8d2424;

  @media only screen and (max-width: 1250px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 520px) {
    font-size: 20px;
  }
`;

const WelcomeCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 2px black;
  text-shadow: -2px 2px 20px #000, 2px 2px 4px #000, 2px -2px 0 #000,
    -2px -2px 0 #000;
  /* transform: translateY(-50px); */
  border-radius: 30%;
  height: 30vh;
`;

const Welcome = styled.h1`
  color: goldenrod;
  font-family: snell roundhand, cursive;
  font-size: 230px;
  overflow: hidden;
  /* background: radial-gradient(
    circle at center,
    rgba(0, 0, 0, 0.5) 60%,
    rgba(0, 0, 0, 0) 100%
  ); */

  span {
    opacity: 0;
    /* background: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0.5) 60%,
      rgba(0, 0, 0, 0) 100%
    ); */
  }

  span:nth-child(1) {
    animation: slideIn 2s cubic-bezier(0.23, 1, 0.32, 1) 1.2s forwards;
  }
  span:nth-child(2) {
    animation: slideIn 2s cubic-bezier(0.23, 1, 0.32, 1) 1.4s forwards;
  }
  span:nth-child(3) {
    animation: slideIn 2s cubic-bezier(0.23, 1, 0.32, 1) 1.6s forwards;
  }
  span:nth-child(4) {
    animation: slideIn 2s cubic-bezier(0.23, 1, 0.32, 1) 1.8s forwards;
  }
  span:nth-child(5) {
    animation: slideIn 2s cubic-bezier(0.23, 1, 0.32, 1) 2s forwards;
  }
  span:nth-child(6) {
    animation: slideIn 2s cubic-bezier(0.23, 1, 0.32, 1) 2.2s forwards;
  }
  span:nth-child(7) {
    animation: slideIn 2s cubic-bezier(0.23, 1, 0.32, 1) 2.4s forwards;
  }
  span:nth-child(8) {
    animation: slideIn 2s cubic-bezier(0.23, 1, 0.32, 1) 2.6s forwards;
  }
  span:nth-child(9) {
    animation: slideIn 2s cubic-bezier(0.23, 1, 0.32, 1) 2.8s forwards;
  }
  span:nth-child(10) {
    animation: slideIn 2s cubic-bezier(0.23, 1, 0.32, 1) 3s forwards;
  }
  span:nth-child(11) {
    animation: slideIn 2s cubic-bezier(0.23, 1, 0.32, 1) 3.2s forwards;
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

  @media only screen and (max-width: 1250px) {
    font-size: 150px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 95px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 70px;
  }
`;

const AboutUsWrapper = styled.div`
  height: 60vh;
  background-color: #b9d5d9;
  background-image: url(${lobby});
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: contain;
  background-position: 50% 50%;
  background-blend-mode: multiply;
  padding-top: 100px;
  padding-bottom: 100px;
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
    font-size: 46px;
    text-align: center;
    line-height: 50px;
    font-weight: 800;
    margin: 0;
    color: #f0fff0;
    text-shadow: -3px 3px 30px #000, 3px 3px 4px #000, 2px -2px 0 #000,
      -1px -1px 0 #000;
    cursor: pointer;
    opacity: 0;
    font-family: Inter;
    animation: slideIn 2s cubic-bezier(0.23, 1, 0.32, 1) 4s forwards;

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

    @media only screen and (max-width: 1250px) {
      font-size: 32px;
    }

    @media only screen and (max-width: 768px) {
      font-size: 24px;
      line-height: 30px;
    }
    @media only screen and (max-width: 450px) {
      font-size: 20px;
      line-height: 26px;
    }
  }
`;

const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  line-height: 50px;
`;

const UpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 80px;
  margin: 40px 0;
  line-height: 50px;

  .fade-in-section {
    opacity: 0;
    transform: translateY(20vh);
    visibility: hidden;
    transition: opacity 0.6s ease-out, transform 1.2s ease-out;
    will-change: opacity, visibility;
  }

  .fade-in-section.is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }

  @media only screen and (max-width: 1250px) {
    padding: 80px;
    margin: 40px 0;
  }

  @media only screen and (max-width: 768px) {
    padding: 80px;
    margin: 40px 0;
  }

  @media only screen and (max-width: 500px) {
    padding: 20px;
    margin: 20px 0;
  }
`;

const SlidingText = styled.p`
  font-size: 80px;

  @media only screen and (max-width: 1250px) {
    font-size: 60px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 40px;
  }
`;

const MovingNumber = styled.span`
  font-size: 140px;
  font-weight: 900;
  color: #008000;
  text-shadow: -1px 1px 10px #000, 1px 1px 2px #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
`;

const MiddleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 40px;

  @media only screen and (max-width: 1250px) {
    flex-direction: column-reverse;
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 500px) {
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
  width: 900px;
  height: 600px;

  @media only screen and (max-width: 1250px) {
    width: 700px;
    height: 600px;
  }

  @media only screen and (max-width: 768px) {
    width: 500px;
    height: 400px;
  }

  @media only screen and (max-width: 500px) {
    width: 350px;
    height: 300px;
  }
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
            de Modesto durante más de 18+ años. Ven a visitarnos para recordar
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
            more than 18+ years. Come visit us to reminisce in the scent and
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
        <WeightText>Address:</WeightText>
        <Text onClick={openGoogleMaps} style={{ cursor: "pointer" }}>
          3801 Yosemite Boulevard, Suite B
        </Text>
        <Text>Modesto, CA 95357</Text>
        <WeightText>Phone:</WeightText>
        <Text>209-578-3599</Text>
        <WeightText>Business Hours:</WeightText>
        <Text>Monday: Closed</Text>
        <Text>Tuesday - Saturday: 7am - 7pm</Text>
        <Text>Sunday: 7am - 2pm</Text>
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
    if (isVisible) {
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
    }

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <ContentWrapper>
      <AboutUs />
      <UpperContainer>
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
      {/* <HeroSection /> */}
      <MiddleContainer>
        <ContactUs />
        <div>
          <SliderStylesContainer>
            <ImageSlider />
          </SliderStylesContainer>
        </div>
      </MiddleContainer>
      <BottomContainer>
        <RedText>We do not offer online ordering.</RedText>
      </BottomContainer>
    </ContentWrapper>
  );
};

export default Home;
