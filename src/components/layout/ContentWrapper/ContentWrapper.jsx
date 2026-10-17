import styles from "./ContentWrapper.module.scss";

export const ContentWrapper = ({ className = "", ...props }) => (
  <div className={`${styles.contentWrapper} ${className}`} {...props} />
);
