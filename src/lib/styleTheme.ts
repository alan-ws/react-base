const color =
  (r: number, g: number, b: number) =>
  (opacity: number): string =>
    `rgba(${r}, ${g}, ${b}, ${opacity})`;

type colors = 'primary';

export interface Style {
  colors: { [name in colors]: (opacity: number) => string };
  padding: {
    xs: number;
  };
  font: { primary: string; secondary: string };
  fontSize: {
    small: number;
    regular: number;
  };
  bp: { sm: number };
  bpContentWidth: { sm: number };
  zIndex: { focus: number };
}

export const style: Style = {
  colors: {
    primary: color(240, 204, 200),
  },
  padding: {
    xs: 5,
  },
  font: {
    primary: 'acumin-pro, sans-serif',
    secondary: 'moret, acumin-pro, sans-serif',
  },
  fontSize: {
    small: 11,
    regular: 16,
  },
  bp: {
    sm: 375,
  },
  bpContentWidth: {
    sm: 325,
  },
  zIndex: {
    focus: 1,
  },
};

export const media = (
  minBp?: typeof style.bp[keyof typeof style.bp],
  maxBp?: typeof style.bp[keyof typeof style.bp],
): string =>
  `@media only screen${minBp ? ` and (min-width: ${minBp}px)` : ''}${
    maxBp ? ` and (max-width: ${maxBp - 1}px)` : ''
  }`;
