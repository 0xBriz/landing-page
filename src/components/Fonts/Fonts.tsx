import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Satoshi';
        font-style: light;
        font-weight: 300;
        font-display: swap;
        src: url('./fonts/Satoshi-Light.woff2') format('woff2'), url('./fonts/Satoshi-Light.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }

      @font-face {
        font-family: 'Satoshi';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/Satoshi-Regular.woff2') format('woff2'), url('./fonts/Satoshi-Regular.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }

      @font-face {
        font-family: 'Satoshi';
        font-style: medium;
        font-weight: 500;
        font-display: swap;
        src: url('./fonts/Satoshi-Medium.woff2') format('woff2'), url('./fonts/Satoshi-Medium.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
      
      @font-face {
        font-family: 'Satoshi';
        font-style: bold;
        font-weight: 700;
        font-display: swap;
        src: url('./fonts/Satoshi-Bold.woff2') format('woff2'), url('./fonts/Satoshi-Bold.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
      
      @font-face {
        font-family: 'Satoshi';
        font-style: black;
        font-weight: 900;
        font-display: swap;
        src: url('./fonts/Satoshi-Black.woff2') format('woff2'), url('./fonts/Satoshi-Black.woff') format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
      `}
  />
);
