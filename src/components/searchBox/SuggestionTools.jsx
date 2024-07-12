import { Box, GridItem, Heading } from "@chakra-ui/react";
import React from "react";

const SuggestionTools = () => {
  return (
    <GridItem
      bg={"#13151C"}
      w={"100%"}
      h={"100%"}
      zIndex={11}
      borderRadius={25}
      rowSpan={2}
    >
      <Heading as={"h3"} size={"md"} dir="rtl">
        ابزار پیشنهادی
      </Heading>
    </GridItem>
  );
};

export default SuggestionTools;
