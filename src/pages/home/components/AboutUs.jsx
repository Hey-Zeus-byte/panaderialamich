import { useState } from "react";
import styles from "../Home.module.scss";

const AboutUs = () => {
  const [translation, setTranslation] = useState(true);

  return (
    <div className={styles.aboutUsWrapper}>
      <div className={styles.welcomeCon}>
        <h1 className={styles.welcome}>
          {"Bienvenidos".split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </h1>
      </div>
      <div className={styles.aboutUsContainer}>
        {translation ? (
          <p
            className={`${styles.text} ${styles.aboutUs}`}
            onClick={() => setTranslation(!translation)}
          >
            Empresa familiar que ha estado sirviendo felizmente a la comunidad
            de Modesto durante más de 20+ años. Ven a visitarnos para recordar
            el olor y el sabor de la auténtica repostería mexicana. Ayúdanos a
            continuar nuestra tradición y cultura expandiendo el conocimiento a
            la siguiente generación.
          </p>
        ) : (
          <p
            className={`${styles.text} ${styles.aboutUs}`}
            onClick={() => setTranslation(!translation)}
          >
            Family Business thats been happily serving the Modesto community for
            more than 20+ years. Come visit us to reminisce in the scent and
            taste of authentic Mexican pastries. Help us continue our tradition
            and culture by expanding the knowledge to the following generation.
          </p>
        )}
      </div>
    </div>
  );
};


export default AboutUs;
