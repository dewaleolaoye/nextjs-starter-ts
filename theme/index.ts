import {
  extendTheme,
  theme as base,
  withDefaultVariant,
} from "@chakra-ui/react";

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        borderColor: "#EDEBF9",
        borderWidth: "1px",
        _placeholder: {
          color: "#14142B",
        },
        backgroundColor: "#fff",
        _focus: {
          borderColor: "#EDEBF9",
          borderWidth: "1px",
          backgroundColor: "#F7F7FC",
        },
      },
    },
  },
};

const theme = extendTheme(
  {
    colors: {
      brand: {
        primary: "#03A438",
        primaryLight: "#A1EFBB",
        primaryDark: "#04822D",
        error: "#ED2E7E",
        success: "#00BA88",
        black: "#14142B",
        borderColor: "#EDEBF9",
        warning: "#F4B740",
        gray: "#4E4B66",
        blue: "#4E45B9",
        subHeader: "#603F83",
      },
    },
    fonts: {
      body: `"Lato", ${base.fonts?.body}`,
    },
    styles: {
      global: {
        "html, body": {
          background: "#F8F8FA",
          color: "#000",
        },
        a: {
          textDecoration: "none",
        },
        ul: {
          listStyle: "none",
          margin: 0,
          padding: 0,
        },
        "::-webkit-scrollbar-thumb": {
          background: "brand.primaryDark",
          width: "3px",
        },
      },
    },
    components: {
      Select: { ...inputSelectStyles },
    },
  },
  withDefaultVariant({
    variant: "filled",
    components: ["Select"],
  })
);

export default theme;
