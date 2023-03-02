import React from "react";
import styled from "styled-components";
import { ContentWrapper } from "./ContentWrapper";
import { Link } from "react-router-dom";

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  border: 3px solid black;
  width: auto;
  text-align: center;
  background-color: #6aa68b;
  padding: 5px 50px 10px;
  justify-content: space-between;
`;

const Panaderia = styled.p`
  color: green;
  font-size: 55px;
  margin: 0;
`;

const LaMich = styled.p`
  color: red;
  font-size: 30px;
  border: 2px solid black;
  border-radius: 25px;
  margin: 0;
`;

const NavList = styled.div`
  display: flex;
  gap: 100px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  color: black;
`;

const NavBar = () => {
  return (
    <ContentWrapper>
      <TitleContainer>
        <div>
          <Panaderia>PANADERIA</Panaderia>
          <LaMich>LA MICHOACANA</LaMich>
        </div>
        <NavList>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pan">Pan</NavLink>
          <NavLink to="/pasteles">Pasteles</NavLink>
        </NavList>
      </TitleContainer>
    </ContentWrapper>
  );
};

export default NavBar;
