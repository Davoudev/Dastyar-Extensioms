import { Box, GridItem } from "@chakra-ui/react";
import React from "react";

const Todo = ({ gridNumber }) => {
  return (
    <GridItem colSpan={2} rowSpan={4} w={"100%"} h={"100%"} bg={"black"}>
      <Box></Box>
    </GridItem>
  );
};

export default Todo;
