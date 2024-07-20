import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { IoMdEyeOff } from "react-icons/io";
import { LuPlus } from "react-icons/lu";
import React, { useState } from "react";

const Todo = (props) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(value);
    setValue("");
  };
  return (
    <form style={{ height: "100%" }} onSubmit={handleSubmit}>
      <Flex
        py={6}
        h={"100%"}
        w={"100%"}
        direction={"column"}
        justifyContent={"center"}
      >
        {/*  */}
        <Flex justifyContent={"space-between"} paddingX={4}>
          <Button
            fontSize={22}
            borderRadius={10}
            padding={0}
            margin={0}
            color={"#E8ECFD"}
            bg={"#1C1F2B"}
          >
            <IoMdEyeOff />
            <Text display={"none"}>مخفی کن</Text>
          </Button>
          <FormLabel fontSize={26} color={"#E8ECFD"}>
            دست نویس
          </FormLabel>
        </Flex>
        {/*  */}
        <Box w={"100%"} bg={"#eef0f512"} h={0.1} my={4}></Box>
        <Box overflow={"auto"}>{props.children}</Box>

        <Flex
          paddingX={4}
          mt={"auto"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <InputGroup>
            <InputLeftElement h={"100%"} p={0} ml={1} color="#A4A5A8">
              <button color="#A4A5A8">
                <LuPlus />
              </button>
            </InputLeftElement>
            <Input
              type="text"
              borderColor={"#414451"}
              dir="rtl"
              value={value}
              pr={4}
              onChange={(e) => setValue(e.target.value)}
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
    </form>
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
