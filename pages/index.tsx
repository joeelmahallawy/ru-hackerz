import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import backgroundImg from "../images/background-ruhackerz.jpeg";
import groupCodingImg from "../images/group-coding.jpeg";
import productHuntImg from "../images/producthunt-image.png";
import theme from "../themes/theme";
import ScrollDown from "../components/scrollDown";
import NavLinks from "../components/navLinks";
import myWashingtonPic from "../images/washington_pic.jpeg";
import { Icon } from "@iconify/react";
import YasminDP from "../images/Yasmin-Modarai-pic.jpeg";
import { useUpdate } from "react-use";
import { GrInstagram } from "react-icons/gr";
import renderSocialMediaButtons from "../components/renderSocialMediaButtons";
import sendMail from "../helpers/mailTo";
import { FcGoogle } from "react-icons/fc";
import { Bounce, Roll, Fade } from "react-reveal";
import Head from "next/head";
import dummyImage from "../images/dummyImg.jpeg";

const IndexPage = () => {
  useEffect(() => {
    updateMe();
  }, []);
  const updateMe = useUpdate();
  const homePage = useRef();
  const ourGoal = useRef();
  const ourTeam = useRef();
  const nav = useRef();
  const [showSticky, setShowSticky] = useState(false);

  if (process.browser) {
    window.onscroll = () => {
      if (
        window.scrollY >
        // @ts-expect-error
        ourGoal.current?.getBoundingClientRect().top +
          window.pageYOffset -
          // @ts-expect-error
          nav.current?.getBoundingClientRect().height / 2
      ) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };
  }

  return (
    <>
      <Head>
        <link rel="icon" sizes="16x16" href="../icons/ruhackerz-logo.ico" />
        <title>RU Hackerz Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box
        bgImage={backgroundImg.src}
        backgroundPosition="center"
        bgSize="cover"
        backgroundRepeat="no-repeat"
        bgAttachment="fixed"
        h="100%"
      >
        <Box
          ref={homePage}
          id="body"
          h="100vh"
          w="100vw"
          bgGradient="linear(to-b, rgb(0,0,0,.75),rgb(255,255,255,0))"
        >
          <Flex
            justifyContent={[
              "center",
              "flex-end",
              "flex-end",
              "flex-end",
              "flex-end",
            ]}
            alignItems="center"
            id="nav-bar"
            w="100%"
            p={[2, 4, 6, 9, 12]}
            h="10%"
            ref={nav}
            bg={showSticky && "rgb(0,0,0,0.55)"}
            pos={process.browser && showSticky ? "fixed" : "unset"}
            top="0px"
            zIndex="999"
          >
            <Flex p={[1, 2, 3, 4, 5]}>
              <NavLinks type={"Home"} button={homePage} />
              <NavLinks type={"Our goal"} button={ourGoal} />
              <NavLinks type={"About the team"} button={ourTeam} />
              <NavLinks type={"Constitution & activities"} />
            </Flex>
          </Flex>
          <Center h="80%" w="100%">
            <Heading
              fontFamily={theme.fonts.heading}
              fontSize={["2xl", "3xl", "4xl", "5xl", "6xl"]}
              color="white"
              bgGradient="linear(to-r, orange.500,blue.500)"
              bgClip="text"
            >
              RU Hackerz
            </Heading>
          </Center>
          <Center h="10%" pb={10}>
            <ScrollDown />
          </Center>
        </Box>
        <Bounce right>
          <Box id="our-goal" ref={ourGoal}>
            <Center bg="gray.800" h="100%" w="100%" flexDir="column" pt={5}>
              <Box>
                <Heading
                  mt={5}
                  {...theme.headings}
                  borderBottom="1px solid white"
                >
                  Our Goal
                </Heading>
              </Box>
              <Box
                display={["block", "block", "block", "flex", "flex"]}
                maxW="85%"
              >
                <Box mt={3} ml={10} w={["80%", "80%", "80%", "70%", "60%"]}>
                  <Image src={groupCodingImg.src} />
                </Box>
                <Center w="100%" p="7.5%" textAlign="center">
                  <Text color="white" fontSize="lg">
                    Here at RU Hackerz, our goal is to provide the perfect
                    learning environment for students to collaborate and thrive
                    in computer programming! Learning programming alone is hard
                    - we believe that collaborative learning gives members a
                    chance to demonstrate their understanding by helping fellow
                    members solve a certain problem or even understand a certain
                    concept.
                  </Text>
                </Center>
              </Box>
              <Box
                display={["block", "block", "block", "flex", "flex"]}
                maxW="85%"
              >
                <Center w="100%" p="7.5%" textAlign="center">
                  <Text color="white" fontSize="lg">
                    Build, Push, Deploy - This is our motto here at RU Hackerz.
                    Our #1 objective is to have members hit the ground running
                    by deploying several projects. We think that the best way of
                    learning the sport is by playing the sport! Members will
                    have used their acquired critical thinking and problem
                    solving skills to ship projects that will disrupt the
                    market.
                  </Text>
                </Center>
                <Box ml={10} w="75%">
                  <Image src={productHuntImg.src} />
                </Box>
              </Box>
            </Center>
          </Box>
        </Bounce>
        <Box id="about-the-team" ref={ourTeam}>
          <Center pt={5}>
            <Heading {...theme.headings} borderBottom="1px solid white">
              About the team
            </Heading>
          </Center>
          <Roll left>
            <Box
              display={["block", "block", "block", "flex", "flex"]}
              id="youssef-profile"
              h="90%"
              m="0 auto"
              p={20}
            >
              <Center w={["100%", "100%", "100%", "45%", "40%"]}>
                <Image src={myWashingtonPic.src} />
              </Center>

              <Center m="0 auto" flexDir="column" w="50%">
                <Box
                  bg="gray.800"
                  w={["240%", "200%", "200%", "90%", "100%"]}
                  p={3}
                >
                  <Box display={["block", "block", "flex", "flex", "flex"]}>
                    <Heading
                      color="white"
                      textAlign="center"
                      mb={5}
                      fontFamily={theme.fonts.heading}
                    >
                      Youssef El Mahallawy
                    </Heading>
                    {renderSocialMediaButtons(
                      "youssefelmahallawy-348864203",
                      "joeelmahallawy",
                      "youssef-el-mahallawy"
                    )}
                  </Box>
                  <Flex>
                    <Box m="0 auto auto 0">
                      <Icon icon="emojione:waving-hand" fontSize="22.5" />
                    </Box>

                    <Text color="white" fontSize="md" ml={1}>
                      {" "}
                      Hey I'm Youssef, a third year software engineering
                      student. I like solving problems and building projects! I
                      learned Javascript over the summer and started building
                      some simple projects for people to use,{" "}
                      <Link
                        _focus={{ outline: "none" }}
                        color="blue.400"
                        href="https://tzcities.vercel.app/"
                        isExternal={true}
                      >
                        check it out!
                      </Link>{" "}
                      I'm excited for this group because I believe it's a great
                      way to connect with and meet other amazing people who are
                      interested in programming!
                    </Text>
                  </Flex>
                </Box>
              </Center>
            </Box>
          </Roll>
          {/* FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:FIXME: */}
          <Roll right>
            <Box
              display={["block", "block", "block", "flex", "flex"]}
              id="yasmin-profile"
              h="90%"
              m="auto auto"
              p={10}
              pr={40}
              justifyContent="space-evenly"
            >
              <Flex m="auto 0" flexDir="column" w="50%">
                <Box
                  w={["350%", "275%", "200%", "90%", "100%"]}
                  bg="gray.800"
                  p={3}
                >
                  <Flex>
                    <Heading
                      color="white"
                      textAlign="center"
                      mb={5}
                      fontFamily={theme.fonts.heading}
                    >
                      Yasmin Modarai
                    </Heading>
                    {renderSocialMediaButtons(
                      "yasmin-modarai-8962b41b2",
                      "fluff905"
                    )}
                  </Flex>
                  <Flex>
                    <Text color="white" fontSize="md" ml={1}>
                      Hi I’m Yasmin Modarai and I’m going into my third year of
                      Software Engineering. I joined RU Hackerz because I want
                      to help others learn to program and build cool projects in
                      a welcoming environment. A fun fact about me is that I’m
                      currently a black belt in karate!
                    </Text>
                  </Flex>
                </Box>
              </Flex>
              <Center w={["175%", "137.5%", "100%", "45%", "35%"]}>
                <Image src={YasminDP.src} />
              </Center>
            </Box>
          </Roll>
        </Box>
        {/* FIXME:FIXME: */}
        {/* FIXME:FIXME: */}
        {/*  */}
        <Center id="marvy-and-kiro" justifyContent="center" w="100%">
          <Box
            display={["block", "block", "block", "flex", "flex"]}
            gridGap={["10%", "50%", "40%", "17.5%", "15%"]}
            w={["100%", "90%", "80%", "75%", "75%"]}
            p={10}
          >
            <Bounce left>
              <Flex
                mt={["20%", "15%", "10%", "5%", "5%"]}
                id="kiro-profile"
                w="100%"
                flexDir="column"
              >
                <Box w="100%">
                  <Image w="100%" h="100%" src={dummyImage.src} />
                </Box>
                <Box bg="gray.800" p={3}>
                  <Text fontSize="md" color="white">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </Text>
                </Box>
              </Flex>
            </Bounce>
            {/* FIXME:FIXME:FIXME:FIXME: */}
            <Bounce right>
              <Flex
                mt={["20%", "15%", "10%", "5%", "5%"]}
                id="marvy-profile"
                w="100%"
                flexDir="column"
              >
                <Box w="100%">
                  <Image h="100%" w="100%" src={dummyImage.src} />
                </Box>
                <Box bg="gray.800" p={3}>
                  <Text color="white">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </Text>
                </Box>
              </Flex>
            </Bounce>
          </Box>
        </Center>
        {/* FIXME:FIXME: */}
        {/* FIXME:FIXME: */}
        <Fade bottom>
          <Center h="50vh" id="sign-up">
            <Button
              size="lg"
              colorScheme="orange"
              fontSize="175%"
              p={["5%", "4%", "3.5%", "3%", "2.5%"]}
              _hover={{ p: "2.75%", fontSize: "200%", bg: "orange.600" }}
            >
              <Link
                _hover={{ borderBottom: "0px" }}
                _focus={{ outline: "none" }}
                isExternal={true}
                href="https://docs.google.com/forms/d/e/1FAIpQLSe33qTD56JENzFOfXbLgpuytILTjabY0ZF5UTcPcagr6nOmwQ/viewform"
              >
                Sign up!
              </Link>
            </Button>
          </Center>
        </Fade>

        <Box w="100%" id="footer" bg="gray.900">
          <Center h="100px" bg="red">
            <Flex gridGap={[20, 10, 10, 10, 10]} bg="blue">
              <Box _hover={{ cursor: "pointer" }} onClick={sendMail}>
                <FcGoogle size="40" />
              </Box>
              <Divider h="45px" colorScheme="gray" orientation="vertical" />
              <Box h="100%">
                <Link
                  isExternal={true}
                  href="https://www.instagram.com/ryersonhackerz/"
                >
                  <GrInstagram size="40" color="white" />
                </Link>
              </Box>
            </Flex>
          </Center>
        </Box>
      </Box>
    </>
  );
};

export default IndexPage;
