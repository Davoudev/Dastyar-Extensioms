import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import React from "react";

const Clock = ({
  hour,
  minute,
  weekday,
  day,
  month,
  gregorian,
  ghamari,
  timerClickHandler,
  oghatClickHandler,
  oghat,
  timer,
}) => {
  return (
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
        {`${hour} : ${minute}`}
      </Heading>

      <Text fontWeight={"bold"} my={3} fontSize={19}>
        {`${weekday} ، ${day} ${month} `}
      </Text>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={2}
        color={"#747785"}
      >
        <Text fontSize={12}>{gregorian}</Text>|
        <Text fontSize={12}>{ghamari}</Text>
      </Flex>
      <Flex justifyContent={"center"} alignItems={"center"} gap={2}>
        <Button
          bg={oghat ? "#3D518F" : "inherit"}
          border={oghat ? "none" : "1px solid #3D404D"}
          borderRadius={20}
          color={oghat ? "#fff" : "#747785"}
          fontSize={12}
          padding={0}
          px={2}
          h={8}
          _hover={{
            border: `${oghat ? `1px solid #747785` : `1px solid #3D404D`}`,
          }}
          _focus={{ outline: "none" }}
          onClick={oghatClickHandler}
        >
          {oghat ? <IoIosArrowUp /> : <IoIosArrowDown />}
          <Box ml={1}> اوقات شرعی</Box>
        </Button>
        <Button
          bg={timer ? "#3D518F" : "inherit"}
          border={timer ? "none" : "1px solid #3D404D"}
          borderRadius={18}
          color={timer ? "#fff" : "#747785"}
          fontSize={12}
          h={8}
          _hover={{
            border: `${timer ? `1px solid #747785` : `1px solid #3D404D`}`,
          }}
          _focus={{ outline: "none" }}
          onClick={timerClickHandler}
        >
          <IoIosArrowDown />
          <Box ml={1}>تایمر</Box>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Clock;
// چگونه از کامپوننت کوچکتر  کامپوننت والد را تغییر دهیم
//  به کمک یک تابع ؟
