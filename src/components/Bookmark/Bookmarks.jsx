import { Flex, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import BoxPlus from "../BoxPlus/BoxPlus";
import { PiDotsNineBold } from "react-icons/pi";

const BookMark = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleBoxPlusClick = (index) => {
    setActiveIndex(index);
  };
  // Create an array with the desired number of BoxPlus components
  const boxPlusComponents = Array.from({ length: 11 }, (_, index) => (
    <BoxPlus
      key={index}
      icon={<FaPlus fontSize={40} />}
      isActive={index === activeIndex}
      onClick={() => handleBoxPlusClick(index)}
    />
  ));
  const x = <BoxPlus icon={<PiDotsNineBold />} text={"دم دستی"} />;

  return (
    <GridItem area={"boxplus"} w={"100%"} flexWrap={"wrap"}>
      <Grid
        // templateColumns="repeat(6, 1fr)"
        templateColumns="repeat(2, 1fr)"
        w={"100%"}
        flexWrap={"wrap"}
        gap={4}
        // textAlign={"right"}
      >
        {x}
        {/* {boxPlusComponents.slice(0, 5)} */}
        {boxPlusComponents.slice(0, 11)}
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
