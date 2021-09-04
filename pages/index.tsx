import { Box, Center, Heading, Image } from "@chakra-ui/react";
import React from "react";
import img from "../images/background-ruhackerz.jpeg";
import theme from "../themes/theme";
import { IoArrowDown } from "react-icons/io5";
import ScrollDown from "../components/scrollDown";

const IndexPage = () => {
  return (
    <Box
      bgImage={img.src}
      backgroundPosition="center"
      bgSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Box
        id="main-page"
        h="100vh"
        w="100vw"
        bgGradient="linear(to-b, rgb(0,0,0,.75),rgb(255,255,255,.1))"
      >
        <Box id="nav-bar" w="100%" bg="red.100" h="10%">
          HIIi
        </Box>
        <Center h="80%" w="100%">
          <Heading
            fontFamily={theme.fonts.heading}
            fontSize="6xl"
            color="white"
            bgGradient="linear(to-r, orange.500,blue.500)"
            bgClip="text"
          >
            RU Hackerz
          </Heading>
        </Center>
        <Center h="10%">
          <ScrollDown />
        </Center>
      </Box>
    </Box>
  );
};

export default IndexPage;
