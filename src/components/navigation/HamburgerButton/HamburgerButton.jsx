import styles from "./HamburgerButton.module.scss";
import { useState } from "react";
import MobileNavMenu from "../MobileNavMenu/MobileNavMenu.jsx";

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
      <div
        className={`${styles.hamburgerButtonWrapper} ${open ? styles.open : ""}`}
        onClick={toggleOpen}
      >
        <div />
        <div />
        <div />
      </div>
      <MobileNavMenu open={open} setOpen={setOpen} />
    </>
  );
};
