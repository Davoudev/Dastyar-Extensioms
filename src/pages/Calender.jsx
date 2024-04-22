import { Box, GridItem } from "@chakra-ui/react";
import React from "react";

const Calender = ({ gridNumber }) => {
  return (
    <GridItem rowSpan={2} colSpan={3} w={"100%"} h={"100%"} bg={"blue"}>
      <Box></Box>
    </GridItem>
  );
};

export default Calender;
