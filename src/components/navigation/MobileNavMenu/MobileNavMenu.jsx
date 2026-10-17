import styles from "./MobileNavMenu.module.scss";
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const MobileNavMenu = ({ open, setOpen }) => {
  const backgroundRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        backgroundRef.current &&
        !backgroundRef.current.contains(event.target)
      ) {
        setOpen(!open);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, setOpen]);

  const handleLinkClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.mobileNavWrapper + (open ? ` ${styles.open}` : "")}>
      <div className={styles.navWrapper + (open ? ` ${styles.open}` : "")}>
        <Link className={styles.navLink} to="/" onClick={handleLinkClick}>
          Home
        </Link>
        <Link className={styles.navLink} to="/pan" onClick={handleLinkClick}>
          Pan
        </Link>
        <Link className={styles.navLink} to="/pasteles" onClick={handleLinkClick}>
          Pasteles
        </Link>
      </div>
    </div>
  );
};

export default MobileNavMenu;
