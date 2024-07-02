import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const DastyarEvent = ({ local, global, holiday, show }) => {
  // stop showing null in page
  const local_ = local ? local : "";
  const global_ = global ? global : "";

  return (
    <Flex
      alignContent={"space-between"}
      justifyContent={"space-around"}
      display={show ? "flex" : "none"}
    >
      <video loop autoPlay __idm_id__="1466369">
        <source
          src="https://liara-s3.dastyar.io/astin-dsDLypxc21x7.webm"
          type="video/webm"
        />
      </video>
      <Box color={`${holiday ? `#DE4538` : `#E8E5EF`}`}>
        {local_}
        {global_}
      </Box>
    </Flex>
  );
};

export default DastyarEvent;
