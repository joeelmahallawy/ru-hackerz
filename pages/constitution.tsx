import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Link,
} from "@chakra-ui/react";
import backgroundImg from "../images/background-ruhackerz.jpeg";
import React, { useState } from "react";
import theme from "../themes/theme";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { GrInstagram } from "react-icons/gr";
import sendMail from "../helpers/mailTo";

const Constitution = () => {
  return (
    <Flex
      flexDir="column"
      bgImage={backgroundImg.src}
      backgroundPosition="center"
      bgSize="cover"
      backgroundRepeat="no-repeat"
      bgAttachment="fixed"
      pt={10}
      h="100%"
      w={["150vw", "120vw", "115vw", "110vw", "100vw"]}
    >
      <Box w="100%" h="100%" pl={10}>
        <Button
          bg="transparent"
          _hover={{ bg: "transparent" }}
          _focus={{ outline: "none" }}
        >
          <Link href="/">
            <a>
              <IoReturnUpBackOutline color="white" size="70" />
            </a>
          </Link>
        </Button>
      </Box>
      <Box
        display={["box", "box", "box", "flex", "flex"]}
        w="100%"
        // h={["1100px", "970px", "950px", "920px", "900px"]}
        h="100%"
        p={20}
        id="body"
      >
        <Center flexDir="column" w="100vw" id="constitution">
          <object
            data="https://www.keepandshare.com/doc2/120148/ru-hackerz-constitution-pdf-63k?da=y"
            type="application/pdf"
            width="500"
            height="700"
          >
            <iframe
              src="https://www.keepandshare.com/doc2/120148/ru-hackerz-constitution-pdf-63k?da=y"
              width="500"
              height="700"
            ></iframe>
          </object>
          <Center>
            <Heading
              mt={3}
              color="white"
              fontSize="5xl"
              fontFamily={theme.fonts.nameHeadings}
            >
              Constitution
            </Heading>
          </Center>
        </Center>

        <Center flexDir="column" w="100%" id="activity-sheet">
          <object
            data="http://www.keepandshare.com/doc2/view.php?id=120191&da=y"
            type="application/pdf"
            width="500"
            height="700"
          >
            <iframe
              src="http://www.keepandshare.com/doc2/view.php?id=120191&da=y"
              width="500"
              height="700"
            ></iframe>
          </object>
          <Center>
            <Heading
              mt={3}
              color="white"
              fontSize="5xl"
              fontFamily={theme.fonts.nameHeadings}
            >
              Activity sheet
            </Heading>
          </Center>
        </Center>
      </Box>
      <Box w="100%" h="100px" id="footer" bg="gray.900">
        <Center h="100%">
          <Flex gridGap="10">
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
    </Flex>
  );
};
export default Constitution;
