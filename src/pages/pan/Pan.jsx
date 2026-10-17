import styles from "./Pan.module.scss";
import React, { useState } from "react";
import { ContentWrapper } from "../../components/layout/ContentWrapper/ContentWrapper.jsx";
import { COOKIES, MISC, FIGURA } from "../../data/bread.js";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";

const Pan = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = [...COOKIES, ...FIGURA, ...MISC].filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
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
        {filteredItems.map((item) => (
          <ProductCard key={item.name} item={item} />
        ))}
      </div>
      <div className={styles.textWrapper}>
        <p className={`${styles.title} ${styles.responsiveText}`}>More photos coming soon</p>
      </div>
    </ContentWrapper>
  );
};

export default Pan;
