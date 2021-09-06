import { Button } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const navLinks = ({ type, button = {} }) => {
  return type != "Constitution & activities" ? (
    <Button
      fontSize={["70%", "md", "lg", "xl", "xl"]}
      borderRadius="0"
      color="white"
      p={[1, 1, 2, 3, 4]}
      mr={[1, 1, 3, 4, 5]}
      bg="transparent"
      _focus={{ outline: "none" }}
      _active={{ bg: "none" }}
      _hover={{
        color: "gray.400",
        bg: "none",
        borderBottom: "1px solid white",
      }}
      onClick={() => {
        if (type != "Constitution") {
          if (process.browser) {
            window.scrollTo({
              left: 0,
              top:
                // @ts-expect-error
                button.current?.getBoundingClientRect().top +
                window.pageYOffset,
              behavior: "smooth",
            });
          }
        }
      }}
    >
      {type}
    </Button>
  ) : (
    <Link href="/constitution">
      <Button
        fontSize={["70%", "md", "lg", "xl", "xl"]}
        borderRadius="0"
        color="white"
        fontWeight="600"
        mr={[1, 1, 3, 4, 5]}
        p={0}
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
    </Link>
  );
};
export default navLinks;
