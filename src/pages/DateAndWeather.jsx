import { Box, Button, Flex, GridItem, Heading, Text } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import React, { useEffect, useState } from "react";
import DastyarEvent from "../components/dastyar-event/DastyarEvent";

const DateAndWeather = ({ gridNumber }) => {
  const [clock, setClock] = useState({
    hour: null,
    minute: null,
    secound: null,
  });
  const [date, setDate] = useState({
    day: null,
    month: null,
    weekday: null,
  });
  const [outsideCalender, setOutsideCalender] = useState({
    ghamari: null,
    gregorian: null,
  });

  const [timer, setTimer] = useState({ hour: 0, min: 25, secound: 0 });
  // به secound وابستش کنیم که هر بار request ارسال بشه یا اینکه
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.keybit.ir/time/");
        if (response.ok) {
          const result = await response.json();
          console.log(result);
          setClock({
            hour:
              result.time24.hour.en < 11
                ? "0" + Number(result.time24.hour.en - 1)
                : Number(result.time24.hour.en) - 1,
            minute: result.time24.minute.en,
            secound: result.time24.second.en,
          });
          setDate({
            day:
              result.date.day.number.fa.charAt(0) == "۰"
                ? result.date.day.number.fa.replace("۰", "")
                : result.date.day.number.fa,
            month: result.date.month.name,
            weekday: result.date.weekday.name,
          });
          setOutsideCalender({
            ghamari: result.date.other.ghamari.usual.fa,
            gregorian: result.date.other.gregorian.usual.en,
          });
        } else {
          console.error("Error fetching data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const intervalId = setInterval(fetchData, 1000);

    return () => clearInterval(intervalId);
  });
  // better show for date wuth delete fucking zero

  return (
    <GridItem
      rowSpan={5}
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
              h={8}
              bg={"inherit"}
              border={"1px solid #3D404D"}
              borderRadius={20}
              color={"#747785"}
              fontSize={12}
              padding={0}
              px={3}
              _hover={{ border: "1px solid #3D404D" }}
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
              {`${clock.hour} : ${clock.minute}`}
            </Heading>

            <Text fontWeight={"bold"} my={3} fontSize={19}>
              {`${date.weekday} ، ${date.day} ${date.month} `}
            </Text>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={2}
              color={"#747785"}
            >
              <Text fontSize={12}>{outsideCalender.gregorian}</Text>|
              <Text fontSize={12}>{outsideCalender.ghamari}</Text>
            </Flex>
            <Flex justifyContent={"center"} alignItems={"center"} gap={2}>
              <Button
                bg={"inherit"}
                border={"1px solid #3D404D"}
                borderRadius={20}
                color={"#747785"}
                fontSize={12}
                padding={0}
                px={2}
                h={8}
                _hover={{ border: "1px solid #3D404D" }}
                _focus={{ outline: "none" }}
              >
                <IoIosArrowDown />
                <Box ml={1}> اوقات شرعی</Box>
              </Button>
              <Button
                bg={"inherit"}
                border={"1px solid #3D404D"}
                borderRadius={18}
                color={"#747785"}
                fontSize={12}
                h={8}
                _hover={{ border: "1px solid #3D404D" }}
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
