// pxv.ts
export const pxv = (px) =>
  `clamp(
    1px,
    calc(${px}vw * (100 / var(--siteBasis))),
    calc(${px}px * var(--siteMax) / var(--siteBasis))
  )`;
