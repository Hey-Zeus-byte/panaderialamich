import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import { CAKES } from "../../data/cakes.js";
import styles from "./Pasteles.module.scss";
import React from "react";
import { ContentWrapper } from "../../components/layout/ContentWrapper/ContentWrapper.jsx";

const Pasteles = () => {
  return (
    <ContentWrapper>
      <p className={styles.title}>Pasteles</p>
      <div className={styles.cakeWrapper}>
        {CAKES.map((cake) => {
          if (cake.images?.length) return <ProductCard key={cake.name} item={cake} />;
          return (
            <div key={cake.name}>
              <img className={styles.cakeImage} src={cake.image} alt={cake.name} tabIndex="0" />
              <p className={styles.cakeName}>{cake.name}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.textWrapper}>
        <p className={`${styles.title} ${styles.responsiveText}`}>More photos coming soon</p>
      </div>
    </ContentWrapper>
  );
};

export default Pasteles;
