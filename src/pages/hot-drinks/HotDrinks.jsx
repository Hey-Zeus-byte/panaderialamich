import { useEffect, useId, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { HOT_DRINKS } from "../../data/hotDrinks.js";
import styles from "./HotDrinks.module.scss";

const HotDrinks = () => {
  const trackRef = useRef(null);
  const carouselId = useId();
  const [{ atStart, atEnd }, setEdges] = useState({ atStart: true, atEnd: false });

  useEffect(() => {
    const track = trackRef.current;
    const updateEdges = () => {
      const next = {
        atStart: track.scrollLeft <= 1,
        atEnd: track.scrollWidth - track.clientWidth - track.scrollLeft <= 1,
      };
      setEdges((current) =>
        current.atStart === next.atStart && current.atEnd === next.atEnd
          ? current
          : next
      );
    };
    const observer = new ResizeObserver(updateEdges);
    observer.observe(track);
    observer.observe(track.firstElementChild);
    track.addEventListener("scroll", updateEdges, { passive: true });
    updateEdges();
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", updateEdges);
    };
  }, []);

  const scrollTo = (left) => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    trackRef.current.scrollTo({ left, behavior: reducedMotion ? "instant" : "smooth" });
  };

  const move = (direction) => {
    const track = trackRef.current;
    const cardWidth = track.firstElementChild.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).columnGap);
    scrollTo(track.scrollLeft + direction * (cardWidth + gap));
  };

  const handleKeyDown = (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    if (event.key === "Home") scrollTo(0);
    else if (event.key === "End") scrollTo(trackRef.current.scrollWidth);
    else move(event.key === "ArrowRight" ? 1 : -1);
  };

  return (
    <main className={styles.page}>
      <h1 className={styles.heading} id="hot-drinks-heading">
        Hot Drinks / Bebidas Calientes
      </h1>
      <section
        className={styles.carousel}
        aria-labelledby="hot-drinks-heading"
        aria-roledescription="carousel"
      >
        <ul
          id={carouselId}
          ref={trackRef}
          className={styles.track}
          tabIndex={0}
          aria-label="Hot drinks. Swipe or use the arrow keys to browse."
          onKeyDown={handleKeyDown}
        >
          {HOT_DRINKS.map((drink) => (
            <li key={drink.id} className={styles.card}>
              <img
                className={styles.image}
                src={drink.image}
                alt="Cappuccino machine — placeholder photo"
                loading="lazy"
              />
              <h2 className={styles.name}>{drink.name}</h2>
              <div className={styles.sizes}>
                <h3 className={styles.sizesHeading} id={`sizes-${drink.id}`}>
                  Available Sizes
                </h3>
                <ul className={styles.sizeList} aria-labelledby={`sizes-${drink.id}`}>
                  {drink.sizes.map((size) => (
                    <li key={size.name} className={styles.sizePill}>
                      <span className={styles.sizeName}>{size.name}</span>
                      <span className={styles.sizeVolume}>{size.volume}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.controls}>
          <button
            className={styles.arrow}
            type="button"
            aria-label="Previous drinks"
            aria-controls={carouselId}
            disabled={atStart}
            onClick={() => move(-1)}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            className={styles.arrow}
            type="button"
            aria-label="Next drinks"
            aria-controls={carouselId}
            disabled={atEnd}
            onClick={() => move(1)}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </section>
    </main>
  );
};

export default HotDrinks;
