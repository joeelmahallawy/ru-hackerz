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
import { Document, Page } from "react-pdf";
import React, { useState } from "react";
import theme from "../themes/theme";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { GrInstagram } from "react-icons/gr";
import sendMail from "../helpers/mailTo";

const Constitution = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <Center
      bgImage={backgroundImg.src}
      backgroundPosition="center"
      bgSize="cover"
      backgroundRepeat="no-repeat"
      bgAttachment="fixed"
      pt={10}
      h="100vh"
      flexDir="column"
    >
      <Box w="100%" pl={10}>
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
      <Flex p={5} gridGap="20" id="body" justifyContent="space-between">
        <Box w="50%" id="constitution">
          <object
            data="https://www.keepandshare.com/doc2/120148/ru-hackerz-constitution-pdf-63k?da=y"
            type="application/pdf"
            width="500"
            height="620"
          />
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
        </Box>

        <Box w="50%" id="activity-sheet">
          <object
            data="http://www.keepandshare.com/doc2/view.php?id=120150&da=y"
            type="application/pdf"
            width="500"
            height="620"
          />
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
        </Box>
      </Flex>
      <Box w="100%" h="100%" id="footer" bg="gray.900">
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
    </Center>
  );
};
export default Constitution;
