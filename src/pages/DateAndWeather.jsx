import { Box, Button, Flex, GridItem, Heading, Text } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import React from "react";
import DastyarEvent from "../components/dastyar-event/DastyarEvent";

const DateAndWeather = ({ gridNumber }) => {
  return (
    <GridItem
      rowSpan={2}
      colSpan={3}
      w={"100%"}
      h={"100%"}
      bg={"rgb(19 ,21 ,28)"}
      borderRadius={25}
    >
      <Flex direction={"column"} h={"100%"} maxW={"100%"}>
        <Flex
          flex={1}
          direction={"row"}
          borderBottom={"1px solid #eef0f512"}
          maxW={"100%"}
          h={"50%"}
        >
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
              bg={"inherit"}
              border={"1px solid #eef0f512"}
              borderRadius={20}
              color={"#747785"}
              fontSize={12}
              padding={0}
              px={2}
              _hover={{ border: "1px solid #eef0f512" }}
              _focus={{ outline: "none" }}
            >
              <IoIosArrowDown />
              پیش بینی
            </Button>
          </Flex>
          <Flex
            flex={1}
            direction={"column"}
            padding={3}
            justifyContent={"space-around"}
            alignItems={"center"}
            w={"50%"}
          >
            <Heading
              color={"blue.500"}
              w={"100%"}
              fontWeight={"bold"}
              textAlign={"center"}
            >
              ۱۱:۲۹
            </Heading>

            <Text fontWeight={"bold"} my={3} fontSize={19}>
              جمعه ، ۱۴ اردیبهشت
            </Text>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={2}
              color={"#747785"}
            >
              <Text fontSize={12}>2024/May/10</Text>|
              <Text fontSize={12}>۱/ذی/۱۴۴۵</Text>
            </Flex>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              my={2}
              mx={"auto"}
            >
              <Button
                bg={"inherit"}
                border={"1px solid #eef0f512"}
                borderRadius={20}
                color={"#747785"}
                fontSize={12}
                padding={0}
                px={2}
                _hover={{ border: "1px solid #eef0f512" }}
                _focus={{ outline: "none" }}
              >
                <IoIosArrowDown />
                <Box ml={1}> اوقات شرعی</Box>
              </Button>
              <Button
                bg={"inherit"}
                border={"1px solid #eef0f512"}
                borderRadius={18}
                color={"#747785"}
                fontSize={12}
                mx={2}
                _hover={{ border: "1px solid #eef0f512" }}
                _focus={{ outline: "none" }}
              >
                <IoIosArrowDown />
                <Box ml={1}>تایمر</Box>
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex flex={1} h={"50%"}>
          <DastyarEvent />
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default DateAndWeather;
