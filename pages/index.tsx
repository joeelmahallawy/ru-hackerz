import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import backgroundImg from "../images/background-ruhackerz.jpeg";
import groupCodingImg from "../images/group-coding.jpeg";
import theme from "../themes/theme";
import { IoArrowDown } from "react-icons/io5";
import ScrollDown from "../components/scrollDown";
import NavLinks from "../components/navLinks";

const IndexPage = () => {
  return (
    <Box
      bgImage={backgroundImg.src}
      backgroundPosition="center"
      bgSize="cover"
      backgroundRepeat="no-repeat"
      bgAttachment="fixed"
    >
      <Box
        id="main-page"
        h="100vh"
        w="100vw"
        bgGradient="linear(to-b, rgb(0,0,0,.75),rgb(255,255,255,0))"
      >
        <Flex
          justifyContent="flex-end"
          alignItems="center"
          id="nav-bar"
          w="100%"
          p={12}
          h="10%"
        >
          <NavLinks type={"Home"} />
          <NavLinks type={"Our goal"} />
          <NavLinks type={"About the team"} />
          <NavLinks type={"Constitution"} />
        </Flex>
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
        <Center h="10%" pb={20}>
          <ScrollDown />
        </Center>
      </Box>
      <Box h="100vh" bg="gray.800">
        <Center flexDir="column" pt={5}>
          <Heading
            fontFamily={theme.fonts.heading}
            fontSize="5xl"
            color="white"
            borderBottom="1px solid white"
          >
            Our Goal
          </Heading>
          <Flex bg="red" maxW="85%">
            <Box mt={3} ml={10} w="50%">
              <Image src={groupCodingImg.src} />
            </Box>
            <Center bg="blue" w="100%" p="7.5%" textAlign="center">
              <Text color="white" fontSize="lg">
                Here at RU Hackerz, our goal is to provide the perfect learning
                environment for students to collaborate and thrive in computer
                programming! Learning programming alone is hard - we believe
                that collaborative learning gives members a chance to
                demonstrate their understanding by helping fellow members solve
                a certain problem or understand a certain concept.
              </Text>
            </Center>
          </Flex>
          <Flex bg="red" maxW="85%">
            <Center bg="green" w="100%" p="7.5%" textAlign="center">
              <Text color="white">4</Text>
            </Center>
            <Box mt={3} ml={10} w="50%">
              <Image src={groupCodingImg.src} />
            </Box>
          </Flex>
        </Center>
      </Box>
    </Box>
  );
};

export default IndexPage;
