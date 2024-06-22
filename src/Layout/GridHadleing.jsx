import { Grid } from "@chakra-ui/react";
import React from "react";

const GridHadleing = (props) => {
  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      templateRows="repeat(14, 1fr)"
      gap={3}
      h={"100vh"}
      w={"100vw"}
      maxW={"1560px"}
      mx={"auto"}
    >
      {props.children}
    </Grid>
  );
};

export default GridHadleing;
