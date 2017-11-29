import { css } from 'styled-components';

export const breakpoints = {
  desktop: 992,
  tablet: 576,
  phone: 0
};

export const queries = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => {
    const width = breakpoints[label];

    if (!width) {
      return css`
        ${css(...args)};
      `;
    }

    return css`
      @media (min-width: ${width / 16}em) {
        ${css(...args)};
      }
    `;
  };

  return acc;
}, {});
