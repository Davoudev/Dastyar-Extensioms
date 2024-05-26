import { Grid } from "@chakra-ui/react";
import React from "react";

const GridHadleing = (props) => {
  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      templateRows="repeat(5, 1fr)"
      gap={4}
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
