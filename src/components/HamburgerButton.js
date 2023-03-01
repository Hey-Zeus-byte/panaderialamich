import { useState } from "react";
import styled from "styled-components";

const HamburgerButtonWrapper = styled.div`
  display: block;
  margin: 16px;
  z-index: 5;
  div {
    width: 30px;
    height: 2px;
    background-color: #000000;
    margin: 8px 0;
    border-radius: 5px;
    transform-origin: 0;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  /* project uses max-width, but min-width is
   appropriate because should always display block in mobiel devices only */
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

//Module Exports
export const HamburgerButton = ({ onToggle }) => {
  const [open, setOpen] = useState();

  const toggleOpen = () => {
    setOpen(!open);
    if (onToggle) {
      onToggle(!open);
    }
  };

  return (
    <>
      <HamburgerButtonWrapper open={open} onClick={toggleOpen}>
        <div />
        <div />
        <div />
      </HamburgerButtonWrapper>
    </>
  );
};