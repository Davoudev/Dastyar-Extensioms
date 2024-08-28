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
import React, { useContext, useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { LuPlus } from "react-icons/lu";
import { AiOutlineCheck } from "react-icons/ai";
// import EditContext from "../../context/edit-context";

const Todo = (props) => {
  const [value, setValue] = useState("");
  // const editcontext = useContext(EditContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Flex
        py={6}
        h={{ base: "400px", xl: "700px" }}
        w={"100%"}
        direction={"column"}
        justifyContent={"center"}
        // filter={"auto"}
        // blur={"3px"}
      >
        {/*  */}
        <Flex justifyContent={"space-between"} paddingX={4}>
          <Button
            fontSize={14}
            minW={8}
            height={"auto"}
            borderRadius={10}
            padding={0}
            margin={0}
            color={"#E8ECFD"}
            bg={"#1C1F2B"}
          >
            <IoMdEyeOff />
            <Text display={"none"}>مخفی کن</Text>
          </Button>
          <FormLabel fontSize={18} color={"#E8ECFD"} fontWeight={"bold"}>
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
              {/* {editcontext.editField ? */}
              <button color="#A4A5A8">
                <LuPlus />
              </button>
              {/* : (
                <Button
                  bg={"#276EF7"}
                  w={"100%"}
                  p={0}
                  border={0}
                  outline={"none"}
                >
                  <AiOutlineCheck />
                </Button>
              ) */}
              {/* } */}
            </InputLeftElement>
            <Input
              type="text"
              borderColor={"#414451"}
              dir="rtl"
              value={value}
              pr={4}
              color={"#FFFFFF"}
              onChange={(e) => setValue(e.target.value)}
              paddingY={2}
              _focus={{ outline: "none", border: "none" }}
              placeholder="نوشتن تسک جدید"
              _placeholder={{
                textAlign: "right",
                color: "#fff",
                fontWeight: "700",
                fontSize: "12px",
              }}
            />
          </InputGroup>
        </Flex>
      </Flex>
    </form>
  );
};

export default Todo;
