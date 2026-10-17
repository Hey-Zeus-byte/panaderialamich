import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./MobileNavMenu.module.scss";

const MobileNavMenu = ({ id, open, setOpen }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const trigger = document.activeElement;
    const links = menuRef.current.querySelectorAll("a");
    const first = links[0];
    const last = links[links.length - 1];
    first?.focus();
    document.body.classList.add("navigation-open");

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab") return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("navigation-open");
      document.removeEventListener("keydown", handleKeyDown);
      trigger?.focus();
    };
  }, [open, setOpen]);

  return (
    <div
      className={`${styles.mobileNavWrapper} ${open ? styles.open : ""}`}
      aria-hidden={!open}
      inert={open ? undefined : ""}
    >
      <button
        type="button"
        className={styles.backdrop}
        aria-label="Close navigation"
        tabIndex={-1}
        onClick={() => setOpen(false)}
      />
      <nav id={id} ref={menuRef} className={styles.navWrapper} aria-label="Mobile navigation">
        <Link className={styles.navLink} to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link className={styles.navLink} to="/pan" onClick={() => setOpen(false)}>Pan</Link>
        <Link className={styles.navLink} to="/pasteles" onClick={() => setOpen(false)}>Pasteles</Link>
      </nav>
    </div>
  );
};

export default MobileNavMenu;
