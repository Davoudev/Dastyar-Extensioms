import { Box } from "@chakra-ui/react";
import React from "react";

const BgLayout = (props) => {
  return (
    <Box
      h={"100%"}
      w={"100%"}
      pos={"absolute"}
      top={0}
      left={0}
      bgColor={"#1F1F1F	"}
      // maxW={"320px"}
      mx={"auto"}
    >
      {props.children}
    </Box>
  );
};

export default BgLayout;
