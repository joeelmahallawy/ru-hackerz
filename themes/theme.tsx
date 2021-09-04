import { extendTheme } from "@chakra-ui/react";
import "@fontsource/orbitron";

const theme = extendTheme({
  fonts: {
    links: "sans-serif",
    heading: "Orbitron",
  },
  headings: {
    textAlign: "center",
    fontFamily: "Orbitron",
    fontSize: "5xl",
    color: "white",
  },
});
export default theme;
