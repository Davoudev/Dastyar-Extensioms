import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import React from "react";

const Weather = ({ pishbiniClickHandler, pishbini }) => {
  return (
    <Flex
      flex={1}
      direction={"column"}
      paddingY={4}
      paddingX={3}
      justifyContent={"space-around"}
      alignItems={"center"}
      borderRight={"1px solid #eef0f512"}
      w={"50%"}
    >
      <Heading mx={"auto"}>
        <Flex>
          <Box>🌱</Box>
          <Box>۵۰°</Box>
        </Flex>
      </Heading>

      <Flex justifyContent={"center"} alignItems={"center"}>
        <Text fontSize={19} fontWeight={"bold"}>
          🍓
        </Text>
        <Text fontSize={19} fontWeight={"bold"}>
          جهنمه
        </Text>
      </Flex>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        w={"100%"}
        fontSize={13}
        gap={2}
        color={"#747785"}
        mt={4}
      >
        <Flex>
          <Text>حداقل</Text>
          <Text color={"gray.400"} fontWeight={"bold"} ml={2}>
            ۳۵°
          </Text>
        </Flex>
        <Flex>
          <Text> حداکثر</Text>
          <Text color={"gray.400"} fontWeight={"bold"} ml={2}>
            ۵۰°
          </Text>
        </Flex>
      </Flex>
      <Button
        h={8}
        bg={pishbini ? "#3D518F" : "inherit"}
        border={pishbini ? "none" : "1px solid #3D404D"}
        borderRadius={18}
        color={pishbini ? "#fff" : "#747785"}
        fontSize={12}
        padding={0}
        px={3}
        _hover={{
          border: `${pishbini ? `1px solid #747785` : `1px solid #3D404D`}`,
        }}
        _focus={{ outline: "none" }}
        onClick={pishbiniClickHandler}
      >
        {pishbini ? <IoIosArrowUp /> : <IoIosArrowDown />}
        پیش بینی
      </Button>
    </Flex>
  );
};

export default Weather;
