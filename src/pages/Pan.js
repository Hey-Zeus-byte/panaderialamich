import React from "react";
import styled from "styled-components";
import { ContentWrapper } from "../components/ContentWrapper";
import happyface from "../images/happyface.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TemporaryImage = styled.img`
  display: flex;
  border-radius: 500px;
`;

const Pan = () => {
  return (
    <ContentWrapper>
      <Container>
        <h1>This page is being worked on.</h1>
        <TemporaryImage src={happyface} alt="happyface"></TemporaryImage>
      </Container>
    </ContentWrapper>
  );
};

export default Pan;
