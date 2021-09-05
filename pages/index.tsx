import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
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
import myWashingtonPic from "../images/washington_pic.jpeg";
import { Icon } from "@iconify/react";
import YasminDP from "../images/Yasmin-Modarai-pic.jpeg";

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
      <Box id="about-the-team">
        <Center pt={5}>
          <Heading {...theme.headings} borderBottom="1px solid white">
            About the team
          </Heading>
        </Center>
        <Flex h="90%" m="0 auto" p={10}>
          <Box w="40%">
            <Image src={myWashingtonPic.src} />
          </Box>
          <Center m="0 auto" flexDir="column" w="50%">
            <Box bg="gray.800" p={3}>
              <Heading
                color="white"
                textAlign="center"
                mb={5}
                fontFamily={theme.fonts.heading}
              >
                Youssef El Mahallawy
              </Heading>
              <Flex>
                <Box m="0 auto auto 0">
                  <Icon icon="emojione:waving-hand" fontSize="22.5" />
                </Box>

                <Text color="white" fontSize="md" ml={1}>
                  {" "}
                  Hey I'm Youssef, a third year software engineering student. I
                  like solving problems and building projects! I learned
                  Javascript over the summer and started building some simple
                  projects for people to use,{" "}
                  <Link
                    _focus={{ outline: "none" }}
                    color="blue.400"
                    href="https://tzcities.vercel.app/"
                    isExternal={true}
                  >
                    check it out!
                  </Link>{" "}
                  I'm excited for this group because I believe it's a great way
                  to connect with and meet other amazing people who are
                  interested in proramming!
                </Text>
              </Flex>
            </Box>
          </Center>
        </Flex>
        {/* FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME: */}
        <Flex h="90%" m="0 auto" p={10}>
          <Center m="0 auto" flexDir="column" w="50%">
            <Box bg="gray.800" p={3}>
              <Heading
                color="white"
                textAlign="center"
                mb={5}
                fontFamily={theme.fonts.heading}
              >
                Yasmin Modarai
              </Heading>
              <Flex>
                <Text color="white" fontSize="md" ml={1}>
                  Hi I’m Yasmin Modarai and I’m going into my third year of
                  Software Engineering. I joined RU Hackerz because I want to
                  help others learn to program and build cool projects in a
                  welcoming environment. A fun fact about me is that I’m
                  currently a black belt in karate
                </Text>
              </Flex>
            </Box>
          </Center>
          <Box w="30%">
            <Image src={YasminDP.src} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default IndexPage;
