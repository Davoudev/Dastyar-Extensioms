import { Grid } from "@chakra-ui/react";
import React from "react";

const templateAreas = {
  sm: `"search search"
                  "time time"
                  "boxplus boxplus"
                  "calender calender"
                  "todo todo"`,
  md: `"search search"
                  "time time"
                  "boxplus boxplus"
                  "calender todo"`,
  base: `"search search"
                  "time time"
                  "boxplus boxplus"
                  "calender calender"
                  "todo todo"`,
  lg: `"time  search  todo"
                  "time boxplus  todo"
                  "time boxplus  todo"
                  "calender x  todo"
                 `,
};

const templateColumns = {
  sm: {},
  md: {},
  base: {},
  lg: "1fr 2fr 1fr",
};

const GridHadleing = (props) => {
  return (
    <Grid
      templateAreas={templateAreas}
      templateColumns={templateColumns}
      // templateRows={"0.25fr 1fr  1fr 1.1fr  1.1fr"}
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
