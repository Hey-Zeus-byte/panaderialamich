import styles from "./HeroSection.module.scss";
import React from "react";
import chocolatechip from "../../../assets/images/cookies/chocochipcookie.jpeg";
import pinkCookie from "../../../assets/images/cookies/pinkcookie.jpeg";
import happyFace from "../../../assets/images/cookies/happyface.png";

const HeroSection = () => {
  return (
    <div className={styles.heroGridContainer}>
      <div className={styles.gridContainer}>
        <div className={`${styles.gridItem} ${styles.spanTwo} ${styles.rowOne}`}>
          <img className={styles.panImage} src={chocolatechip} alt="Chocolate chip cookie" />
        </div>
        <div className={`${styles.gridItem} ${styles.columnOne} ${styles.rowTwo}`}>
          <img className={styles.panImage} src={happyFace} alt="happy face cookie" />
        </div>
        <div className={`${styles.gridItem} ${styles.columnTwo} ${styles.rowTwo}`}>
          <img className={styles.panImage} src={chocolatechip} alt="Chocolate chip cookie" />
        </div>
      </div>
      <div className={styles.gridContainer}>
        <div className={`${styles.gridItem} ${styles.columnOne} ${styles.rowOne}`}>
          <img className={styles.panImage} src={pinkCookie} alt="pink cookie" />
        </div>
        <div className={`${styles.gridItem} ${styles.columnTwo} ${styles.rowOne}`}>
          <img className={styles.panImage} src={pinkCookie} alt="pink cookie" />
        </div>
        <div className={`${styles.gridItem} ${styles.spanTwo} ${styles.rowTwo}`}>
          <img className={styles.panImage} src={happyFace} alt="happy face cookie" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
