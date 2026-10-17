import { useEffect, useId, useState } from "react";
import MobileNavMenu from "../MobileNavMenu/MobileNavMenu.jsx";
import styles from "./HamburgerButton.module.scss";

export const HamburgerButton = () => {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <>
      <button
        type="button"
        className={`${styles.hamburgerButtonWrapper} ${open ? styles.open : ""}`}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      <MobileNavMenu id={menuId} open={open} setOpen={setOpen} />
    </>
  );
};
