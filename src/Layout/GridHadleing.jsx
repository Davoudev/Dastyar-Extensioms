import { Grid } from "@chakra-ui/react";
import React from "react";

const GridHadleing = (props) => {
  return (
    <Grid
      templateAreas={`"search search"
                  "time time"
                  "boxplus boxplus"
                  "calender calender"
                  "todo todo"`}
      templateColumns="repeat(2, 1fr)"
      templateRows={"0.25fr 1fr  1fr 1.1fr  1.1fr"}
      gap={3}
      h={"100%"}
      // mx={"auto"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
    >
      {props.children}
    </Grid>
  );
};

export default GridHadleing;
