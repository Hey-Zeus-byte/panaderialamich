import React, { useState } from "react";
import styled from "styled-components";
import { ContentWrapper } from "./ContentWrapper";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { HamburgerButton } from "./HamburgerButton";

const NavFlexWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  background-color: white;
  padding: 5px 50px 10px;
  justify-content: space-between;

  @media only screen and (max-width: 850px) {
    padding: 5px 30px 10px;
  }

  @media only screen and (max-width: 500px) {
    padding: 5px 10px 10px;
  }
`;

const NavList = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    gap: 100px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  color: black;

  @media only screen and (max-width: 1050px) {
    font-size: 25px;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
`;

const DesktopNavBar = () => {
  return (
    <NavList>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pan">Pan</NavLink>
      <NavLink to="/pasteles">Pasteles</NavLink>
    </NavList>
  );
};

const NavBar = () => {
  const [open] = useState();

  return (
    <div>
      <ContentWrapper>
        <NavFlexWrapper>
          <NavLink to="/">
            <Logo src={logo} alt="panaderia_la_michoacana_logo" />
          </NavLink>
          <DesktopNavBar />
          <HamburgerButton onToggle={open} />
        </NavFlexWrapper>
      </ContentWrapper>
    </div>
  );
};

export default NavBar;
