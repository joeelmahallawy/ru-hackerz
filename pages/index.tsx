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
import RUTransparent from "../public/icons/ru-hackerz-transparent-logo.ico";
import KiroDP from "../images/Kirolos-Youssef-pic.png";
import MarvyDP from "../images/Marvy-Shaker-pic.png";

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
        <link
          rel="icon"
          sizes="16x16"
          href="../icons/ru-hackerz-transparent-logo.ico"
        />
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
            <Box
              mr="auto"
              h={["0px", "80px", "80px", "80px", "80px"]}
              _hover={{ cursor: "pointer" }}
              onClick={() => {
                if (process.browser) {
                  window.scrollTo({
                    left: 0,
                    top:
                      // @ts-expect-error
                      homePage.current?.getBoundingClientRect().top +
                      window.pageYOffset,
                    behavior: "smooth",
                  });
                }
              }}
              borderRadius="60%"
            >
              <Image
                w="100%"
                h="100%"
                fit="contain"
                borderRadius="50%"
                src={RUTransparent.src}
              />{" "}
            </Box>
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
                    members develop problem solving skills or understand
                    difficult concepts.
                  </Text>
                </Center>
              </Box>
              <Box
                display={["block", "block", "block", "flex", "flex"]}
                maxW="85%"
              >
                <Center w="100%" p="7.5%" textAlign="center">
                  <Text color="white" fontSize="lg">
                    Build, Push, Deploy - That is our motto here at RU Hackerz.
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
                      p={3}
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
          {/* 
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
                      p={3}
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
                      Hi I???m Yasmin Modarai and I???m going into my third year of
                      Software Engineering. I joined RU Hackerz because I want
                      to help others learn to program and build cool projects in
                      a welcoming environment. A fun fact about me is that I???m
                      currently a black belt in karate!
                    </Text>
                  </Flex>
                </Box>
              </Flex>
              <Center w={["175%", "137.5%", "100%", "45%", "35%"]}>
                <Image src={YasminDP.src} />
              </Center>
            </Box>
          </Roll> */}
        </Box>
        {/* FIXME:FIXME: */}
        {/* FIXME:FIXME: */}
        {/*  */}
        <Center
          id="marvy-and-kiro"
          justifyContent="center"
          w="100%"
          // bg="blue"
          p={10}
        >
          <Box
            display={["block", "block", "block", "flex", "flex"]}
            // gridGap={["0%", "0%", "0%", "17.5%", "20%"]}
            w={["100%", "90%", "85%", "85%", "85%"]}
          >
            <Bounce left>
              <Flex
                mt={["15%", "10%", "5%", "0%", "0%"]}
                id="kiro-profile"
                w="110%"
                // w={["95%", "85%", "80%", "75%", "70%"]}
                flexDir="column"
              >
                <Box>
                  <Image fit="cover" src={KiroDP.src} />
                </Box>
                <Box bg="gray.800" p={5}>
                  <Flex>
                    <Heading
                      color="white"
                      textAlign="center"
                      p={3}
                      fontFamily={theme.fonts.heading}
                    >
                      Kirolos Youssef
                    </Heading>
                    {renderSocialMediaButtons(
                      "kirolos-youssef-850504131",
                      "kiro358"
                    )}
                  </Flex>
                  <Flex>
                    <Text fontSize="md" color="white">
                      Hey I???m Kiro a Computer Engineer in the making, passionate
                      about cryptocurrency and advancements in AI. I???m excited
                      for RU Hackerz because I look forward to meeting
                      like-minded individuals that are looking to grow and share
                      similar interests.
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Bounce>
            {/* FIXME:FIXME:FIXME:FIXME: */}
            {/* FIXME:FIXME:FIXME:FIXME: */}
            <Bounce right>
              <Flex
                mt={["15%", "10%", "5%", "0%", "0%"]}
                id="marvy-profile"
                ml="auto"
                w={["95%", "85%", "80%", "75%", "70%"]}
                flexDir="column"
              >
                <Box>
                  <Image src={MarvyDP.src} />
                </Box>
                <Box bg="gray.800" w="100%" p={5}>
                  <Center>
                    <Heading
                      color="white"
                      alignItems="center"
                      textAlign="center"
                      p={3}
                      fontFamily={theme.fonts.heading}
                    >
                      Marvy Shaker
                    </Heading>
                    {renderSocialMediaButtons(
                      "marvy-shaker-3b3473195",
                      "marvyshaker"
                    )}
                  </Center>
                  <Text color="white">
                    Hi I???m Marvy and I???m in my third year of software
                    engineering. I learned Python over the summer to get more
                    involved with, and work on Machine learning projects. I am
                    excited to be a part of RU Hackerz because I was able to
                    grow my interest and love for coding through the help of my
                    friends and colleagues. In this club I can do the same for
                    others who are new to coding or who are interested in
                    building new projects.
                  </Text>
                </Box>
              </Flex>
            </Bounce>
          </Box>
        </Center>
        <Fade bottom>
          <Center h="50vh" id="sign-up">
            <Button
              _focus={{ outline: "none" }}
              size="lg"
              colorScheme="orange"
              fontSize={["205%", "200%", "190%", "182.5%", "175%"]}
              p={["3.5%", "3%", "2.5%", "2%", "1.5%"]}
              _hover={{
                p: ["3.75%", "3.25%", "2.75%", "2.25%", "1.75%"],
                fontSize: ["225%", "210%", "200%", "192.5%", "185%"],
                bg: "orange.600",
              }}
            >
              <Link
                _hover={{ borderBottom: "0px" }}
                _focus={{ outline: "none" }}
                isExternal={true}
                href="https://discord.gg/Wy8rhFWU"
              >
                Join the discord!
              </Link>
            </Button>
          </Center>
        </Fade>

        <Box w="100%" id="footer" bg="gray.900">
          <Center h="100px">
            <Flex gridGap={[20, 10, 10, 10, 10]}>
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
