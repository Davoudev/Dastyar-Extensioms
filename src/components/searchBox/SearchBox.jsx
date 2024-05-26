import {
  Box,
  Flex,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { SlMagnifier } from "react-icons/sl";
import { FcGoogle } from "react-icons/fc";

import React from "react";

const SearchBox = () => {
  return (
    <GridItem
      rowSpan={1}
      bg={"rgb(19 ,21 ,28)"}
      borderRadius={25}
      paddingX={8}
      paddingY={7}
    >
      <Flex
        bg={"#eef0f512"}
        borderRadius={35}
        position={"relative"}
        padding={1}
      >
        <InputGroup>
          <InputLeftElement
            fontSize={24}
            bg={"rgb(61, 81, 143 )"}
            borderRadius={"9999px"}
            height={"80%"}
            w={"70px"}
            aspectRatio={1}
            position={"absolute"}
            left={0}
            top={"10%"}
            transform={"translateX(10%)"}
          >
            <SlMagnifier />
          </InputLeftElement>
          <Input
            placeholder="جست و جو در گوگل"
            variant={"unstyled"}
            borderRadius={"50px"}
            paddingRight={12}
            paddingLeft={90}
            paddingY={4}
            w={"100%"}
            textAlign="right"
          />
          <InputRightElement
            fontSize={35}
            borderRadius={"50%"}
            height={"80%"}
            aspectRatio={1}
            position={"absolute"}
            right={0}
            top={"10%"}
            transform={"translateX(-10%)"}
          >
            <FcGoogle />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </GridItem>
  );
};

export default SearchBox;
