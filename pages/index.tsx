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
import productHuntImg from "../images/producthunt-image.png";
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
        id="body"
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
      <Box id="our-goal" h="100vh">
        <Center bg="gray.800" h="100%" w="100%" flexDir="column" pt={5}>
          <Box>
            <Heading mt={5} {...theme.headings} borderBottom="1px solid white">
              Our Goal
            </Heading>
          </Box>
          <Flex maxW="85%">
            <Box mt={3} ml={10} w="60%">
              <Image src={groupCodingImg.src} />
            </Box>
            <Center w="100%" p="7.5%" textAlign="center">
              <Text color="white" fontSize="lg">
                Here at RU Hackerz, our goal is to provide the perfect learning
                environment for students to collaborate and thrive in computer
                programming! Learning programming alone is hard - we believe
                that collaborative learning gives members a chance to
                demonstrate their understanding by helping fellow members solve
                a certain problem or even understand a certain concept.
              </Text>
            </Center>
          </Flex>
          <Flex maxW="85%">
            <Center w="100%" p="7.5%" textAlign="center">
              <Text color="white" fontSize="lg">
                Build, Push, Deploy - This is our motto here at RU Hackerz. Our
                #1 objective is to have members hit the ground running by
                deploying several projects. We think that the best way of
                learning the sport is by playing the sport! Members will have
                used their acquired critical thinking and problem solving skills
                to ship projects that will disrupt the market.
              </Text>
            </Center>
            <Box ml={10} w="75%">
              <Image src={productHuntImg.src} />
            </Box>
          </Flex>
        </Center>
      </Box>

      <Box h="100vh" id="about-the-team">
        <Center w="100%" h="10%" flexDir="column" pt={5}>
          <Heading
            {...theme.headings}
            // mb={10}
            borderBottom="1px solid white"
          >
            About the team
          </Heading>
        </Center>
        <Box>
          <Heading>hi</Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default IndexPage;
