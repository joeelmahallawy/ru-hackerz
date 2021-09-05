import { extendTheme } from "@chakra-ui/react";
import "@fontsource/orbitron";
import "@fontsource/amiri";
import "@fontsource/abril-fatface";
import "@fontsource/bebas-neue";

const theme = extendTheme({
  fonts: {
    links: "sans-serif",
    heading: "Orbitron",
    nameHeadings: "Bebas Neue",
  },
  headings: {
    textAlign: "center",
    fontFamily: "Orbitron",
    fontSize: "5xl",
    color: "white",
  },
});
export default theme;
