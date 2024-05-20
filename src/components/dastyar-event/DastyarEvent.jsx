import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const DastyarEvent = () => {
  return (
    <Flex alignContent={"space-between"}>
      <video autoplay loop>
        <source
          src="https://liara-s3.dastyar.io/astin-dsDLypxc21x7.webm"
          type="video/webm"
        ></source>
      </video>
      <Box>this is a test text</Box>
    </Flex>
  );
};

export default DastyarEvent;
