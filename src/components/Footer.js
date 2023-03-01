import React from "react";
import styled from "styled-components";
import { ContentWrapper } from "./ContentWrapper";
import { openGoogleMaps } from "./Map";

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f6f6f6;
  left: 0;
  bottom: 0;
  width: auto;
  text-align: center;
`;

const CopyRightText = styled.p`
  font-family: "Source Sans Pro";
  font-size: 13px;
`;

const Information = styled(CopyRightText)`
  font-size: 15px;
`;

const Address = styled(CopyRightText)`
  font-size: 15px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

const Footer = () => {
  return (
    <Container>
      <ContentWrapper>
        <div>
          <Information> Panaderia La Michoacana</Information>
          <Address onClick={openGoogleMaps}>
            3801 Yosemite Blvd, Suite B Modesto, CA 95357
          </Address>
          <Information>209-578-3599</Information>
        </div>
        <div>
          <CopyRightText>
            Copyright © 2023 Panaderia La Michoacana or Jesus Valdez. All Rights
            Reserved.
          </CopyRightText>
        </div>
      </ContentWrapper>
    </Container>
  );
};

export default Footer;
