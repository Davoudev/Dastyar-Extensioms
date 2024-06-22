import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const BoxPlus = (props) => {
  return (
    <Flex
      bg={"#1A1D26"}
      borderRadius={8}
      justifyContent={"center"}
      alignItems={"center"}
      color={"#BABDC6"}
      flexDir={"column"}
    >
      <Box fontWeight={"bold"} fontSize={50}>
        {props.icon}
      </Box>
      <Box fontWeight={"bold"} fontSize={18}>
        {props.text}
      </Box>
    </Flex>
  );
};

export default BoxPlus;
