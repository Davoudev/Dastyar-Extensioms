import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const DastyarEvent = (props) => {
  const local = props.local ? props.local : "";
  const global = props.global ? props.global : "";

  return (
    <Flex alignContent={"space-between"}>
      <video loop autoPlay __idm_id__="1466369">
        <source
          src="https://liara-s3.dastyar.io/astin-dsDLypxc21x7.webm"
          type="video/webm"
        />
      </video>
      <Box color={`${props.holiday ? `#E8E5EF` : `#DE4538`}`}>
        {local}
        {global}
      </Box>
    </Flex>
  );
};

export default DastyarEvent;
