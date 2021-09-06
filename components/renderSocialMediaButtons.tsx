import { Link, Center, Flex } from "@chakra-ui/react";
import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaAngellist } from "react-icons/fa";

const renderSocialMediaButtons = (
  linkedIn: string,
  gitHub: string,
  angelList = ""
) => (
  <Center>
    <Link
      _focus={{ outline: "none" }}
      isExternal={true}
      href={`https://www.linkedin.com/in/${linkedIn}/`}
    >
      <Center
        _hover={{ bg: "lightgray", cursor: "pointer" }}
        ml={2}
        borderRadius="50%"
        bg="white"
        w="40px"
        h="40px"
      >
        <AiFillLinkedin color="#2542D3" size="30" />
      </Center>
    </Link>
    <Link
      _focus={{ outline: "none" }}
      isExternal={true}
      href={`https://github.com/${gitHub}`}
    >
      <Center
        _hover={{ bg: "lightgray", cursor: "pointer" }}
        ml={2}
        borderRadius="50%"
        bg="white"
        w="40px"
        h="40px"
      >
        <AiFillGithub color="black" size="30" />
      </Center>
    </Link>
    {angelList != "" && (
      <Link
        _focus={{ outline: "none" }}
        isExternal={true}
        href={`https://angel.co/u/${angelList}`}
      >
        <Center
          _hover={{ bg: "lightgray", cursor: "pointer" }}
          ml={2}
          borderRadius="50%"
          bg="white"
          w="40px"
          h="40px"
        >
          <FaAngellist color="black" size="30" />
        </Center>
      </Link>
    )}
  </Center>
);

export default renderSocialMediaButtons;
