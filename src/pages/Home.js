import React, { useState, useEffect, useRef } from "react";
import { ContentWrapper } from "../components/ContentWrapper";
import styled from "styled-components";
import lobby from "../images/miscellaneous/lobby.jpg";
import { openGoogleMaps } from "../components/Map";
import ImageSlider from "../components/ImageSlider";

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 10px;
  outline: 2px black;
  text-shadow: -1px 1px 10px #000, 1px 1px 2px #000, 1px -1px 0 #000,
    -1px -1px 0 #000;
`;

const Welcome = styled.h1`
  color: #b8860b; // Dark Goldenrod
  font-family: snell roundhand, cursive;
  font-size: 180px;

  animation: fadeIn 7s;
  -webkit-animation: fadeIn 7s;
  -moz-animation: fadeIn 7s;
  -o-animation: fadeIn 7s;
  -ms-animation: fadeIn 7s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media only screen and (max-width: 1250px) {
    font-size: 140px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 90px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 70px;
  }
`;

const AboutUsWrapper = styled.div`
  height: 80vh;
  background-color: #b9d5d9;
  background-image: url(${lobby});
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  animation: fadeIn 5s;
  -webkit-animation: fadeIn 5s;
  -moz-animation: fadeIn 5s;
  -o-animation: fadeIn 5s;
  -ms-animation: fadeIn 5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  padding-top: 100px;
  padding-bottom: 100px;
`;

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 80px;
  gap: 20px;

  .about-us {
    font-size: 30px;
    text-align: center;
    line-height: 50px;
    font-weight: 800;
    margin: 0;
    color: #f0fff0;
    text-shadow: -1px 1px 10px #000, 1px 1px 2px #000, 1px -1px 0 #000,
      -1px -1px 0 #000;
    cursor: pointer;

    font-family: Arial;
    animation: fadeIn 8s;
    -webkit-animation: fadeIn 8s;
    -moz-animation: fadeIn 8s;
    -o-animation: fadeIn 8s;
    -ms-animation: fadeIn 8s;

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-moz-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-o-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-ms-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @media only screen and (max-width: 1250px) {
      font-size: 22px;
    }

    @media only screen and (max-width: 768px) {
      font-size: 18px;
    }
    @media only screen and (max-width: 450px) {
      font-size: 12px;
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
        <Welcome>Bienvenidos</Welcome>
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
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

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
          70
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
