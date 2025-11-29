import { css } from "styled-components";

const breakpoints = {
  tablet: 768,
  desktop: 1240,
};

export const tablet = (first, ...interpolations) => css`
  @media (max-width: ${breakpoints.tablet}px) {
    ${css(first, ...interpolations)}
  }
`;

export const desktop = (first, ...interpolations) => css`
  @media (max-width: ${breakpoints.desktop}px) {
    ${css(first, ...interpolations)}
  }
`;
