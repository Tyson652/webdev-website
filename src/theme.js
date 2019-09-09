import { Sizes, Space, FontSizes, BorderWidths, Radii } from "./themeArrays";

export default {
  colors: {
    text: "#3e3e3e",
    mutedText: "#555",
    background: "#fff",
    primary: "#92c4e9",
    secondary: "#1b1b38",
    accent: "#bd4738",
    elixir: "#402350",
    react: "#53c1de",
    brandDark: "#4e2a8e",
    elixirLight: "#6c43b5",
    dark: "#7250a1",
    lightBorder: "#f2f2f2",
    elixirMid: "#8e63db",
    darkness: "#000",
    lightness: "#f2f2f2",
    headerOpaque: "rgba(33,16,75, 0.9)",
    headerTransparent: "rgba(33,16,75, 0)"
  },
  fonts: {
    body: "'Open Sans', Helvetica, sans-serif",
    heading: "'Playfair Display', Georgia, serif",
    modern: "'Arial', Helvetica, sans-serif"
  },
  fontSizes: FontSizes(),
  fontWeights: {
    light: 100,
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    tight: 1,
    body: 1.5,
    heading: 1.25
  },
  sizes: Sizes(),
  space: Space(),
  breakpoints: ["690px", "960px", "1100px", "1750px"],
  borderTypes: ["solid"],
  borderWidths: BorderWidths(),
  radii: Radii(),
  // abstraction leap
  buttonStyles: {
    primary: {
      color: "primary",
      backgroundColor: "secondary"
    },
    secondary: {
      color: "secondary",
      backgroundColor: "primary"
    },
    danger: {
      color: "secondary",
      backgroundColor: "accent"
    },
    signUp: {
      color: "background",
      backgroundColor: "brandDark",
      paddingX: 24,
      paddingY: 8,
      display: "inline-block",
      borderRadius: 6,
      marginX: 8,
      marginTop: [8, 8, 16],
      marginBottom: 24,
      border: "2px solid background",
      fontFamily: "modern",
      fontSize: [16, 16, 20],
      fontWeight: "body",
      textDecoration: "none",
      ":hover": {
        textDecoration: "none",
        cursor: "pointer"
      }
    }
  },
  textStyles: {
    body: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body"
    },
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading"
    },
    modern: {
      fontFamily: "modern",
      fontWeight: "heading",
      lineHeight: "heading"
    },
    title: {
      fontFamily: "modern",
      fontWeight: "heading",
      lineHeight: "heading",
      color: "mutedText",
      padding: 8,
      marginBottom: 4,
      fontSize: 24
    },
    shadow: {
      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.05)"
    }
  },
  linkStyles: {
    default: {
      color: "primary",
      cursor: "pointer",
      textDecoration: "none",
      ":hover": {
        color: "primary",
        textDecoration: "underline"
      }
    },
    buttonDefault: {
      textDecoration: "none",
      ":active": {
        textDecoration: "none",
        color: "none"
      },
      ":hover": {
        textDecoration: "none",
        cursor: "pointer"
      }
    },
    button: {
      borderWidth: 1,
      borderColor: "primary",
      paddingX: 16,
      paddingY: [2, 4, 4],
      marginY: [8, 4, 4],
      borderStyle: 0,
      borderRadius: 4,
      fontSize: 14,
      fontWeight: "body"
    }
  },
  linearGradientStyles: {
    transparent: {
      background: "linear-gradient(transparent 300px, white 95%)"
    }
  },
  clipPathStyles: {
    footer: {
      clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 30%)"
    }
  },
  boxShadowStyles: {
    lightShadow: {
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.11)"
    },
    mediumShadow: {
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)"
    },
    darkShadow: {
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
    },
    darkerShadow: {
      boxShadow: "3px -3px 80px 20px rgba(0, 0, 0, 0.1)"
    }
  },
  hoverShadow: {
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)"
  },
  borderStyles: {
    veryLightBorderTop: {
      borderTop: theme => `1px solid ${theme.colors.lightBorder}`
    },
    lightBorder: {
      border: theme => `2px solid ${theme.colors.lightBorder}`
    },
    lightBorderBottom: {
      borderBottom: theme => `2px solid ${theme.colors.lightBorder}`
    }
  },
  styles: {
    root: {
      fontFamily: "body",
      color: "text",
      bg: "background",
      lineHeight: "body",
      fontSize: [16, 16, 20]
    },
    // Container: {
    //   paddingX: [3, 4, 5]
    // },
    Header: {
      variant: "textStyles.heading",
      color: "primary",
      bg: "elixirPurple"
    },
    h1: {
      variant: "textStyles.modern",
      fontSize: [48, 48, 48]
    },
    h2: {
      variant: "textStyles.modern",
      fontSize: [36, 36, 36]
    },
    h3: {
      variant: "textStyles.modern",
      fontSize: [24, 24, 24]
    },
    h4: {
      variant: "textStyles.modern",
      fontSize: [20, 20, 20]
    },
    h5: {
      variant: "textStyles.modern",
      fontSize: [16, 16, 16]
    },
    a: {
      variant: "linkStyles.Buttondefault",
      textDecoration: "none"
    },
    icon: {
      margin: "14px 16px 14px -5px",
      fontSize: "36px"
    },
    li: { padding: 20 },
    // p: { fontSize: 3 },
    hr: {
      borderBottom: theme =>
        `${theme.borderWidths[2]}px ${theme.borderStyles[0]} ${
          theme.colors.lightBorder
        }`
    }
  }
};
