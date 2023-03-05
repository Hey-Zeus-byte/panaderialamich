import React from "react";
import styled from "styled-components";
import { ContentWrapper } from "./ContentWrapper";
import { openGoogleMaps } from "./Map";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  margin: 2px 0;
`;

const Address = styled(CopyRightText)`
  font-size: 15px;
  cursor: pointer;
  margin: 0;

  &:hover {
    color: red;
  }
`;

const Footer = () => {
  return (
    <ContentWrapper>
      <Container>
        <div>
          <Information>Panaderia La Michoacana</Information>
          <Address onClick={openGoogleMaps}>
            3801 Yosemite Blvd, Suite B Modesto, CA 95357
          </Address>
          <Information>209-578-3599</Information>
        </div>
        <div>
          <CopyRightText>
            Copyright © 2023 Panaderia La Michoacana or Its Affiliates. All
            Rights Reserved.
          </CopyRightText>
        </div>
      </Container>
    </ContentWrapper>
  );
};

export default Footer;