import { Box, GridItem } from "@chakra-ui/react";
import React from "react";

const Search = ({ gridNumber }) => {
  return (
    <GridItem
      colSpan={6}
      rowSpan={2}
      w={"100%"}
      h={"100%"}
      bg={"black"}
      borderRadius={25}
    >
      <Box></Box>
    </GridItem>
  );
};

export default Search;
