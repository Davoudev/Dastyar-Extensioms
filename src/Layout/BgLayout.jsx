import { Grid } from "@chakra-ui/react";
import React from "react";

const BgLayout = (props) => {
  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      templateRows="repeat(4, 1fr)"
      h={"100vh"}
      w={"100vw"}
      left={0}
      top={0}
      bgImage={"/honey.jpg"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      zIndex={-10}
      paddingInline={64}
      paddingY={12}
      gap={4}
    >
      {props.children}
    </Grid>
  );
};

export default BgLayout;
