import styles from "./Footer.module.scss";
import React from "react";
import { ContentWrapper } from "../ContentWrapper/ContentWrapper.jsx";
import { openGoogleMaps } from "../../../utils/maps.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <ContentWrapper>
      <div className={styles.container}>
        <div>
          <p className={`${styles.copyRightText} ${styles.information}`}>Panaderia La Michoacana</p>
          <p className={`${styles.copyRightText} ${styles.address}`} onClick={openGoogleMaps}>
            3801 Yosemite Blvd, Suite B Modesto, CA 95357
          </p>
          <p className={`${styles.copyRightText} ${styles.information}`}>209-578-3599</p>
          <a
            className={styles.instagramLink}
            href="https://www.instagram.com/lapanaderialamichoacana/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" color="black" />
          </a>
        </div>
        <div>
          <p className={styles.copyRightText}>
            Copyright © 2026 Panaderia La Michoacana or Its Affiliates. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Footer;
