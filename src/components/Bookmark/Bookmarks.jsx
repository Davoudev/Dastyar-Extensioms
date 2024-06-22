import { Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import BoxPlus from "../BoxPlus/BoxPlus";
import { PiDotsNineBold } from "react-icons/pi";

const BookMark = () => {
  // Create an array with the desired number of BoxPlus components
  const boxPlusComponents = Array.from({ length: 11 }, (_, index) => (
    <BoxPlus key={index} icon={<FaPlus fontSize={40} />} />
  ));
  const x = <BoxPlus icon={<PiDotsNineBold />} text={"دم دستی"} />;

  return (
    <GridItem rowSpan={2}>
      <Grid
        templateColumns="repeat(6, 1fr)"
        templateRows="repeat(2, 1fr)"
        h="100%"
        w={"100%"}
        gap={4}
        textAlign={"right"}
      >
        {boxPlusComponents.slice(0, 5)}
        {x}
        {boxPlusComponents.slice(5, 11)}
      </Grid>
    </GridItem>
  );
};
// ...
export default BookMark;

// import { Flex, Grid, GridItem } from "@chakra-ui/react";
// import React from "react";
// import { FaPlus } from "react-icons/fa6";
// import BoxPlus from "../BoxPlus/BoxPlus";
// import { PiDotsNineBold } from "react-icons/pi";

// const BookMark = () => {
//   // Create an array with the desired number of BoxPlus components
//   const boxPlusComponents = Array.from({ length: 11 }, (_, index) => (
//     <BoxPlus key={index} icon={<FaPlus fontSize={40} />} />
//   ));
//   const x = <BoxPlus icon={<PiDotsNineBold />} text={"دم دستی"} />;
//   return (
//     <GridItem rowSpan={2}>
//       <Grid
//         templateColumns="repeat(6, 1fr)"
//         templateRows="repeat(2, 1fr)"
//         h="100%"
//         w={"100%"}
//         gap={4}
//         textAlign={"right"}
//       >
//         {boxPlusComponents}
//         {x}
//       </Grid>
//     </GridItem>
//   );
// };

// export default BookMark;
