import styles from "./NavBar.module.scss";
import React from "react";
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
      <Link className={styles.navLink} to="/hot-drinks">Hot Drinks</Link>
    </div>
  );
};

const NavBar = () => {
  return (
    <ContentWrapper>
      <nav className={styles.navFlexWrapper} aria-label="Main navigation">
        <Link className={styles.logoLink} to="/">
          <img className={styles.logo} src={logo} alt="panaderia_la_michoacana_logo" />
        </Link>
        <DesktopNavBar />
        <HamburgerButton />
      </nav>
    </ContentWrapper>
  );
};

export default NavBar;
