import React, { useState } from "react";
import styled from "styled-components";
import { ContentWrapper } from "./ContentWrapper";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { HamburgerButton } from "./HamburgerButton";
import { pxv } from "../styles/pxv";

const NavFlexWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  background-color: white;
  padding: ${pxv(10)} 0;
  justify-content: space-between;
  width: 100%;
`;

const NavList = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    gap: ${pxv(100)};
    padding-right: ${pxv(18)};
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 30px;
  color: black;
  padding-left: ${pxv(10)};

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
    <ContentWrapper>
      <NavFlexWrapper>
        <NavLink to="/">
          <Logo src={logo} alt="panaderia_la_michoacana_logo" />
        </NavLink>
        <DesktopNavBar />
        <HamburgerButton onToggle={open} />
      </NavFlexWrapper>
    </ContentWrapper>
  );
};

export default NavBar;
