import styles from "./Pan.module.scss";
import React, { useState } from "react";
import { ContentWrapper } from "../../components/layout/ContentWrapper/ContentWrapper.jsx";
import { COOKIES, MISC, FIGURA } from "../../data/bread.js";

const Cookies = ({ cookies }) => {
  return (
    <>
      {cookies.map((cookie) => {
        return (
          <div key={cookie.name}>
            <img className={styles.panImage} src={cookie.image} alt={cookie.name} tabIndex="0" />
            <p className={styles.panName}>{cookie.name}</p>
          </div>
        );
      })}
    </>
  );
};

const Misc = ({ misc }) => {
  return (
    <>
      {misc.map((item) => {
        return (
          <div key={item.name}>
            <img className={styles.panImage} src={item.image} alt={item.name} />
            <p className={styles.panName}>{item.name}</p>
          </div>
        );
      })}
    </>
  );
};

const Figura = ({ figura }) => {
  return (
    <>
      {figura.map((figura) => {
        return (
          <div>
            <img className={styles.panImage} src={figura.image} alt={figura.name} />
            <p className={styles.panName}>{figura.name}</p>
          </div>
        );
      })}
    </>
  );
};

const Pan = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCookies = COOKIES.filter((cookie) =>
    cookie.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredMisc = MISC.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredFigura = FIGURA.filter((figura) =>
    figura.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ContentWrapper>
      <div className={styles.hero}>
        <p className={styles.title}>Pan</p>
        <input className={styles.panSearch}
          type="text"
          placeholder="Search Pan..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search"
        />
      </div>
      <div className={styles.panWrapper}>
        <Cookies cookies={filteredCookies} />
        <Figura figura={filteredFigura} />
        <Misc misc={filteredMisc} />
      </div>
      <div className={styles.textWrapper}>
        <p className={`${styles.title} ${styles.responsiveText}`}>More photos coming soon</p>
      </div>
    </ContentWrapper>
  );
};

export default Pan;
