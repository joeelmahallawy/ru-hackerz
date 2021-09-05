import { Box, Button, Center, Flex, Heading } from "@chakra-ui/react";
import backgroundImg from "../images/background-ruhackerz.jpeg";
import { Document, Page } from "react-pdf";
import React, { useState } from "react";
import theme from "../themes/theme";
import { IoReturnUpBackOutline } from "react-icons/io5";
import Link from "next/link";

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
      h="120vh"
      pt={0}
      flexDir="column"
    >
      <Box w="100%" pl={10}>
        <Button
          bg="transparent"
          _hover={{ bg: "transparent" }}
          _focus={{ outline: "none" }}
        >
          {/* <Link href="/">
            <IoReturnUpBackOutline color="white" size="60" />
          </Link> */}
        </Button>
      </Box>
      <Flex
        p={5}
        id="body"
        // h="100%"
        // w="100vw"
        justifyContent="space-between"
        bgGradient="linear(to-b, rgb(0,0,0,.75),rgb(255,255,255,0))"
      >
        {/* <Flex justifyContent="flex-end" p={10}>
          <Button>hi</Button>
          <Button>hi</Button>
          <Button>hi</Button>
          <Button>hi</Button>
        </Flex> */}
        <Flex gridGap="20">
          <Box w="50%" id="constitution">
            <object
              data="https://www.keepandshare.com/doc2/120148/ru-hackerz-constitution-pdf-63k?da=y"
              type="application/pdf"
              width="500"
              height="620"
            >
              <iframe
                src="https://www.keepandshare.com/doc2/120148/ru-hackerz-constitution-pdf-63k?da=y"
                width="500"
                height="620"
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
          </Box>

          <Box w="50%" id="activity-sheet">
            <object
              data="http://www.keepandshare.com/doc2/view.php?id=120150&da=y"
              type="application/pdf"
              width="500"
              height="620"
            >
              {/* <iframe
                src="http://www.keepandshare.com/doc2/view.php?id=120150&da=y"
                width="500"
                height="620"
              ></iframe> */}
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
          </Box>
        </Flex>
      </Flex>
    </Center>
  );
};
export default Constitution;
