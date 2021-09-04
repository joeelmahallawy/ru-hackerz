import { Box, Slide, SlideFade, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoArrowDown } from "react-icons/io5";
import { Bounce } from "react-reveal";

const ScrollDown = () => {
  return (
    <Bounce down>
      <IoArrowDown size="30" color="white" />
    </Bounce>
  );
};
export default ScrollDown;
