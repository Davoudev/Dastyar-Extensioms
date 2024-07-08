import { Checkbox, Flex } from "@chakra-ui/react";
import React from "react";

const Todo = () => {
  return (
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
  );
};

export default Todo;
