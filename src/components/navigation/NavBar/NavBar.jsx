import styles from "./NavBar.module.scss";
import React, { useState } from "react";
import { ContentWrapper } from "../../layout/ContentWrapper/ContentWrapper.jsx";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { HamburgerButton } from "../HamburgerButton/HamburgerButton.jsx";

const DesktopNavBar = () => {
  return (
    <div className={styles.navList}>
      <Link className={styles.navLink} to="/">Home</Link>
      <Link className={styles.navLink} to="/pan">Pan</Link>
      <Link className={styles.navLink} to="/pasteles">Pasteles</Link>
    </div>
  );
};

const NavBar = () => {
  const [open] = useState();

  return (
    <ContentWrapper>
      <div className={styles.navFlexWrapper}>
        <Link className={styles.navLink} to="/">
          <img className={styles.logo} src={logo} alt="panaderia_la_michoacana_logo" />
        </Link>
        <DesktopNavBar />
        <HamburgerButton onToggle={open} />
      </div>
    </ContentWrapper>
  );
};

export default NavBar;
