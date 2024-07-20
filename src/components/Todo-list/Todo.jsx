import { Checkbox, Flex } from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";

import React from "react";

const Todo = ({ task }) => {
  return (
    <Flex
      mx={4}
      mb={3}
      borderRadius={14}
      border={"1px solid"}
      borderColor={"gray.600"}
      direction={"row-reverse"}
      p={3}
      bg={"#eef0f512"}
    >
      <Checkbox
        size="lg"
        colorScheme="green"
        flexDirection={"row-reverse"}
        gap={4}
      >
        {task}
      </Checkbox>
    </Flex>
  );
};

export default Todo;
// usage colorScheme we can add any color to checkbox
