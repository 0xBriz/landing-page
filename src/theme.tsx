import { extendTheme } from "@chakra-ui/react";

const fonts = { body: "Satoshi", heading: "Satoshi" };

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: "#16161D",
        _dark: "#ade3b8",
      },
      heroGradientStart: {
        default: "#7928CA",
        _dark: "#e3a7f9",
      },
      heroGradientEnd: {
        default: "#FF0080",
        _dark: "#fbec8f",
      },
    },
    radii: {
      button: "12px",
    },
  },
  colors: {
    blue: "#040825",
    purple: "#6C86E7",
    white: {
      100: "#F8F8F9",
      200: "#E0E0E2",
    },
    gray: {
      800: "#1F1C2B",
      900: "#050813",
    },
  },
  fontSizes: {
    "3xl": "32px",
    "4xl": "40px",
    "5xl": "48px",
    "6xl": "60px",
  },
  textStyles: {
    navBarLink: {
      fontSize: "14px",
      fontWeight: 500,
    },
  },
  fonts,
  breakpoints,
});

export default theme;
