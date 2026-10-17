import { openGoogleMaps } from "../../../utils/maps.js";
import styles from "../Home.module.scss";

const ContactUs = () => {
  return (
    <div className={styles.contactUsContainer}>
      <div>
        <div>
          <p className={`${styles.text} ${styles.weightText}`}>Address:</p>
          <p className={`${styles.text} ${styles.mapLink}`} onClick={openGoogleMaps}>
            3801 Yosemite Boulevard, Suite B
          </p>
          <p className={styles.text}>Modesto, CA 95357</p>
          <p className={`${styles.text} ${styles.weightText}`}>Phone:</p>
          <p className={styles.text}>209-578-3599</p>
        </div>
        <div>
          <p className={`${styles.text} ${styles.weightText}`}>Business Hours:</p>
          <p className={styles.text}>Monday: Closed</p>
          <p className={styles.text}>Tuesday - Saturday: 7am - 7pm</p>
          <p className={styles.text}>Sunday: 7am - 1pm</p>
        </div>
      </div>
    </div>
  );
};


export default ContactUs;
