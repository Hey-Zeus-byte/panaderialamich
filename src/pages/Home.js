import { ContentWrapper } from "../components/ContentWrapper";
import styled from "styled-components";
import { useState } from "react";
import InstagramEmbed from "react-instagram-embed";

const Text = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 30px;
  margin: 5px;
`;

const BusHourContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  }
`;

const Translate = styled.button`
  font-size: 20px;
`;

const HoursAndIGContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const AboutUs = () => {
  const [translation, setTranslation] = useState(true);

  return (
    <AboutUsContainer>
      {translation ? (
        <Text className="about-us">
          Family Business thats been happily serving the Modesto community for
          more than 18+ years. Come visit us to reminisce in the scent and taste
          of authentic Mexican pastries. Help us continue our tradition and
          culture by expanding the knowledge to the following generation.
        </Text>
      ) : (
        <Text className="about-us">
          Empresa familiar que ha estado sirviendo felizmente a la comunidad de
          Modesto durante más de 18+ años. Ven a visitarnos para recordar el
          olor y el sabor de la auténtica repostería mexicana. Ayúdanos a
          continuar nuestra tradición y cultura expandiendo el conocimiento a la
          siguiente generación.
        </Text>
      )}
      {translation ? (
        <Translate onClick={() => setTranslation(!translation)}>
          Haga clic aquí para traducir.
        </Translate>
      ) : (
        <Translate onClick={() => setTranslation(!translation)}>
          Click here to translate.
        </Translate>
      )}
    </AboutUsContainer>
  );
};

const BusHours = () => {
  return (
    <BusHourContainer>
      <Text>Business Hours:</Text>
      <Text>Monday: Closed</Text>
      <Text>Tuesday - Saturday: 7am - 7pm</Text>
      <Text>Sunday: 7am - 2pm</Text>
    </BusHourContainer>
  );
};

const Home = () => {
  return (
    <ContentWrapper>
      <AboutUs />
      <HoursAndIGContainer>
        <BusHours />
        <InstagramEmbed
          url="https://www.instagram.com/lapanaderialamichoacana/"
          // clientAccessToken="123|456"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </HoursAndIGContainer>
    </ContentWrapper>
  );
};

export default Home;
