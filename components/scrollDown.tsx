import { SlideFade, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { IoArrowDown } from "react-icons/io5";

const ScrollDown = () => {
  const { isOpen, onToggle } = useDisclosure();
  setInterval(() => {
    onToggle();
  }, 500);
  const returnTrue = () => {
    return setInterval(() => {
      true;
    }, 500);
  };

  return (
    <SlideFade in={true} offsetY="20px">
      <IoArrowDown size="30" color="white" />
    </SlideFade>
  );
};
export default ScrollDown;
