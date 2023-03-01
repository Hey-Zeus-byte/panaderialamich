import React from "react";
import styled from "styled-components";
import { ContentWrapper } from "./ContentWrapper";
import { Link } from "react-router-dom";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid black;
  width: auto;
  height: auto;
  text-align: center;
  background-color: #6aa68b;
`;

const Panaderia = styled.p`
  color: green;
  font-size: 55px;
`;

const LaMich = styled.p`
  color: red;
  font-size: 30px;
  border: 2px solid black;
  border-radius: 25px;
`;

const NavList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 30px;
`;

const NavBar = () => {
  return (
    <TitleContainer>
      <ContentWrapper>
        <>
          <Panaderia>PANADERIA</Panaderia>
          <LaMich>LA MICHOACANA</LaMich>
        </>
        <NavList>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pan">Pan</NavLink>
        </NavList>
      </ContentWrapper>
    </TitleContainer>
  );
};

export default NavBar;
