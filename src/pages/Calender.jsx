import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const Calender = ({ gridNumber }) => {
  return (
    <GridItem
      rowSpan={2}
      colSpan={3}
      w={"100%"}
      h={"100%"}
      bg={"blue"}
      borderRadius={25}
    >
      {/* https://api.keybit.ir/time/ */}
      {/* persian calender */}
    </GridItem>
  );
};

export default Calender;
