import {
  Box,
  Button,
  Checkbox,
  Flex,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { IoMdEyeOff } from "react-icons/io";
import { LuPlus } from "react-icons/lu";
import React from "react";

const Todo = ({ gridNumber }) => {
  return (
    <GridItem
      colSpan={3}
      rowSpan={12}
      w={"100%"}
      h={"100%"}
      bg={"#13151C"}
      borderRadius={25}
    >
      <Flex
        paddingY={6}
        h={"100%"}
        w={"100%"}
        direction={"column"}
        justifyContent={"center"}
      >
        {/*  */}
        <Flex justifyContent={"space-between"} paddingX={4}>
          <Button fontSize={22} borderRadius={10} padding={0} margin={0}>
            <IoMdEyeOff />
            <Text display={"none"}>مخفی کن</Text>
          </Button>
          <Heading fontSize={26}>دست نویس</Heading>
        </Flex>
        {/*  */}
        <Box w={"100%"} bg={"#eef0f512"} h={0.1} my={4}></Box>
        <Flex
          marginX={4}
          borderRadius={14}
          border={"1px solid"}
          borderColor={"gray.600"}
          direction={"row-reverse"}
          padding={4}
          bg={"#eef0f512"}
        >
          <Checkbox
            size="lg"
            colorScheme="green"
            flexDirection={"row-reverse"}
            gap={2}
          >
            Test
          </Checkbox>
        </Flex>
        <Flex
          paddingX={4}
          mt={"auto"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color={"gray.400"}
              h={"100%"}
            >
              <LuPlus />
            </InputLeftElement>
            <Input
              type="text"
              paddingY={6}
              _focus={{ outline: "none", border: "none" }}
              placeholder="نوشتن تسک جدید"
              _placeholder={{
                textAlign: "right",
                color: "#fff",
                fontWeight: "700",
              }}
            />
          </InputGroup>
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default Todo;

{
  /* <UnorderedList>
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</UnorderedList> */
}
