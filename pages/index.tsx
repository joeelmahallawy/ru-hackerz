import { Box, Center, Heading, Image } from "@chakra-ui/react";
import React from "react";
import img from "../images/background-ruhackerz.jpeg";
import theme from "../themes/theme";

const IndexPage = () => {
  return (
    <>
      <Center
        id="main-page"
        h="100vh"
        w="100vw"
        bgImage={img.src}
        backgroundPosition="center"
        bgSize="cover"
        backgroundRepeat="no-repeat"
      >
        <Center
          h="100%"
          w="100%"
          bgGradient="linear(to-b, rgb(0,0,0,.75),rgb(255,255,255,.1))"
        >
          <Heading
            fontFamily={theme.fonts.heading}
            fontSize="7xl"
            color="white"
            bgGradient="linear(to-r, red,blue.200)"
            bgClip="text"
            // t="linear(to-b, rgb(0,0,0,.75),rgb(255,255,255,.1))"
          >
            RU Hackerz
          </Heading>
        </Center>
      </Center>
      {/* <Box></Box> */}
    </>
  );
};

export default IndexPage;
