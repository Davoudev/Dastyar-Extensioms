import { Box, Grid } from "@chakra-ui/react";
import React from "react";

const BgLayout = (props) => {
  return (
    <Box
      h={"100vh"}
      w={"100vw"}
      left={0}
      top={0}
      overflow={"hidden"}
      // bgImage={"/honey.jpg"}
      // bgSize={"cover"}
      // bgRepeat={"no-repeat"}
      bgColor={"#1F1F1F	"}
      zIndex={-10}
    >
      {props.children}
    </Box>
  );
};

export default BgLayout;
