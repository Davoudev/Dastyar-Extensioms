import {
  Badge,
  Box,
  Button,
  Checkbox,
  Flex,
  Text,
  useBoolean,
  useToast,
} from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { PiArrowElbowDownLeftBold } from "react-icons/pi";

import React from "react";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const [showDelete, setShowDelete] = useBoolean();
  const toast = useToast();

  return (
    <Flex
      mx={4}
      mb={3}
      borderRadius={14}
      border={"1px solid"}
      borderColor={"gray.600"}
      p={3}
      bg={"#eef0f512"}
      flexDir={"column"}
      gap={4}
      className={`${task.completed ? "completed" : ""}`}
      _hover={{
        ".todo-icon": {
          opacity: 1,
        },
      }}
    >
      <Flex
        direction={"row-reverse"}
        justifyContent={"space-between"}
        align={"center"}
        w={"100%"}
      >
        <Checkbox
          size="lg"
          colorScheme="gray"
          flexDirection={"row-reverse"}
          gap={4}
          onChange={() => toggleComplete(task.id)}
        >
          {task.task}
        </Checkbox>
        <Flex fontSize={12} gap={2} color={"#868A9B"}>
          <Box
            cursor={"pointer"}
            opacity={0}
            className="todo-icon"
            transition="opacity 0.3s"
            onClick={setShowDelete.toggle}
          >
            <FaRegTrashAlt />
          </Box>
          <Box
            cursor={"pointer"}
            opacity={0}
            className="todo-icon"
            transition="opacity 0.3s"
          >
            <FaPen />
          </Box>
        </Flex>
      </Flex>

      <Flex justify={"space-around"} display={showDelete ? "flex" : "none"}>
        {/* 1 */}
        <Button
          w={28}
          bg={"#333740"}
          color={"#A8ABBA"}
          px={4}
          py={2}
          border={"none"}
          _hover={{ bg: "#333740" }}
          onClick={() => editTodo(task.id, task.todo)}
        >
          <Flex gap={2} align={"center"}>
            <Text
              bg={"#414451"}
              p={1}
              boxShadow={"0 0 10px  rgba(0, 0, 0, 0.07)"}
              borderRadius={6}
              fontSize={12}
            >
              Esc
            </Text>
            <Text>بیخیال</Text>
          </Flex>
        </Button>
        {/* 2 */}
        <Button
          w={28}
          bg={"#42282D"}
          color={"#DE4237"}
          px={4}
          py={2}
          border={"none"}
          _hover={{ bg: "#42282D" }}
          onClick={() => {
            deleteTodo(task.id);
            toast({
              position: "bottom",
              duration: 4000,
              isClosable: false,

              render: () => (
                <Flex
                  color="#FFFFFF"
                  p={4}
                  bg="#2B2F3D"
                  mb={10}
                  borderRadius={10}
                  justify={"space-between"}
                  w={"400px"}
                >
                  <Flex gap={2} align={"center"}>
                    <Badge
                      variant="subtle"
                      fontSize={10}
                      my={"auto"}
                      opacity={0.5}
                      p={1}
                      // color={"#747785"}
                    >
                      CTRL + z
                    </Badge>
                    <Text color={"#D4D8E9"}>برگرداندن</Text>
                  </Flex>
                  <Text color={"#FFFFFF"} fontSize={22} fontWeight={"bold"}>
                    ! دست نویس حذف شد
                  </Text>
                </Flex>
              ),
            });
          }}
        >
          <Flex gap={2} align={"center"}>
            <Box
              bg={"#5B2D2F"}
              p={1}
              boxShadow={"0 0 10px  rgba(0, 0, 0, 0.07)"}
              borderRadius={6}
            >
              <PiArrowElbowDownLeftBold />
            </Box>
            <Text>حذف</Text>
          </Flex>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Todo;
// usage colorScheme we can add any color to checkbox
