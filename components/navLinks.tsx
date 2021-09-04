import { Button } from "@chakra-ui/react";
import React from "react";

const navLinks = ({ type }) => {
  return (
    <Button
      fontSize="lg"
      borderRadius="0"
      color="white"
      p={2}
      mr={5}
      bg="transparent"
      _focus={{ outline: "none" }}
      _active={{ bg: "none" }}
      _hover={{
        color: "gray.400",
        bg: "none",
        fontSize: "xl",
        borderBottom: "1px solid white",
      }}
    >
      {type}
    </Button>
  );
};
export default navLinks;
