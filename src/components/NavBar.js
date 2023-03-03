import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { ContentWrapper } from "./ContentWrapper";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  text-align: center;
  background-color: white;
  padding: 5px 50px 10px;
  justify-content: space-between;
`;

const NavList = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  color: black;
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
`;

const InstagramLink = styled.a`
  width: 100%;
  height: auto;
`;

const NavBar = () => {
  return (
    <ContentWrapper>
      <TitleContainer>
        <div>
          <Logo src={logo} alt="panaderia_la_michoacana_logo" />
        </div>
        <NavList>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pan">Pan</NavLink>
          <NavLink to="/pasteles">Pasteles</NavLink>
          <InstagramLink href="https://www.instagram.com/lapanaderialamichoacana/">
            <FontAwesomeIcon icon={faInstagram} size="2x" color="black" />
          </InstagramLink>
        </NavList>
      </TitleContainer>
    </ContentWrapper>
  );
};

export default NavBar;
