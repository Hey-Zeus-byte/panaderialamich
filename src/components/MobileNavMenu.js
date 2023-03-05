import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MobileNavWrapper = styled.div`
  position: absolute;
  @media only screen and (min-width: 768px) {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    &::after {
      display: ${({ open }) => (open ? "block" : "none")};
      background-color: #00000040;
      content: "";
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
`;

const NavLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #919191;
  font-size: 11px;
  line-height: 12px;
  padding: 9px 20px;
  font-weight: bold;
  &:hover {
    color: #000000;
  }
  @media only screen and (max-width: 768px) {
    font-size: 20px;
    font-weight: 500;
    color: #000000;
    line-height: 38px;
  }
`;

const NavWrapper = styled.div`
  background-color: rgb(245, 244, 220);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
  padding-top: 56px;
  z-index: 1;
`;

const MobileNavMenu = ({ open }) => {
  return (
    <MobileNavWrapper open={open}>
      <NavWrapper open={open}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pan">Pan</NavLink>
        <NavLink to="/pasteles">Pasteles</NavLink>
      </NavWrapper>
    </MobileNavWrapper>
  );
};

export default MobileNavMenu;
