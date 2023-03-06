import { ContentWrapper } from "../components/ContentWrapper";
import styled from "styled-components";
import { useState } from "react";
import lobby from "../images/lobby.jpeg";
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
  background-color: #b9d5d8;
  background-image: url(${lobby});
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;

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
    font-size: 26px;
    text-align: center;
    line-height: 50px;
    font-weight: 800;
    margin: 0;
    color: #f0fff0;
    text-shadow: -1px 1px 10px #000, 1px 1px 2px #000, 1px -1px 0 #000,
      -1px -1px 0 #000;

    @media only screen and (max-width: 1250px) {
      font-size: 22px;
    }

    @media only screen and (max-width: 768px) {
      font-size: 18px;
    }
    @media only screen and (max-width: 450px) {
      font-size: 16px;
    }
  }
`;

const Translate = styled.button`
  font-size: 20px;
`;

const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  line-height: 50px;
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
          <Text className="about-us">
            Empresa familiar que ha estado sirviendo felizmente a la comunidad
            de Modesto durante más de 18+ años. Ven a visitarnos para recordar
            el olor y el sabor de la auténtica repostería mexicana. Ayúdanos a
            continuar nuestra tradición y cultura expandiendo el conocimiento a
            la siguiente generación.
          </Text>
        ) : (
          <Text className="about-us">
            Family Business thats been happily serving the Modesto community for
            more than 18+ years. Come visit us to reminisce in the scent and
            taste of authentic Mexican pastries. Help us continue our tradition
            and culture by expanding the knowledge to the following generation.
          </Text>
        )}
        {translation ? (
          <Translate onClick={() => setTranslation(!translation)}>
            Click here to translate
          </Translate>
        ) : (
          <Translate onClick={() => setTranslation(!translation)}>
            Haga clic aquí para traducir
          </Translate>
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
          3801 Yosemite Boulevard, Suite 3
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
  return (
    <ContentWrapper>
      <AboutUs />
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
