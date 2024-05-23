import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const DastyarEvent = () => {
  return (
    <Flex alignContent={"space-between"}>
      <video loop autoPlay __idm_id__="1466369">
        <source
          src="https://liara-s3.dastyar.io/astin-dsDLypxc21x7.webm"
          type="video/webm"
        />
      </video>
      <Box>this is a test text</Box>
    </Flex>
  );
};

export default DastyarEvent;
