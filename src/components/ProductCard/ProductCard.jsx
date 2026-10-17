import { useRef, useState } from "react";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ item }) => {
  const images = item.images?.length ? item.images : [item.image];
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(null);
  const multiple = images.length > 1;

  const move = (direction) => {
    setCurrent((index) => (index + direction + images.length) % images.length);
  };

  const handleKeyDown = (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    move(event.key === "ArrowRight" ? 1 : -1);
  };

  const handleTouchEnd = (event) => {
    if (!touchStart.current) return;
    const dx = touchStart.current.x - event.changedTouches[0].clientX;
    const dy = touchStart.current.y - event.changedTouches[0].clientY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) move(dx > 0 ? 1 : -1);
    touchStart.current = null;
  };

  return (
    <div className={styles.card}>
      <div
        className={styles.photos}
        role={multiple ? "group" : undefined}
        aria-label={multiple ? `${item.name} photos` : undefined}
        aria-roledescription={multiple ? "carousel" : undefined}
        onKeyDown={multiple ? handleKeyDown : undefined}
        onTouchStart={multiple ? (event) => {
          touchStart.current = {
            x: event.touches[0].clientX,
            y: event.touches[0].clientY,
          };
        } : undefined}
        onTouchEnd={multiple ? handleTouchEnd : undefined}
        onTouchCancel={() => { touchStart.current = null; }}
      >
        <div className={multiple ? styles.imageFrame : undefined}>
          <img
            className={styles.image}
            src={images[current]}
            alt={multiple ? `${item.name} — photo ${current + 1} of ${images.length}` : item.name}
            loading="lazy"
          />
        </div>
        {multiple && (
          <div className={styles.dots} role="group" aria-label={`${item.name} photo selection`}>
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                className={`${styles.dot} ${current === index ? styles.active : ""}`}
                aria-label={`Show ${item.name} photo ${index + 1} of ${images.length}`}
                aria-pressed={current === index}
                onClick={() => setCurrent(index)}
              >
                <span aria-hidden="true" />
              </button>
            ))}
          </div>
        )}
      </div>
      <p className={styles.name}>{item.name}</p>
    </div>
  );
};

export default ProductCard;
