import {
  Box,
  Flex,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IoMdTrendingUp } from "react-icons/io";
import React from "react";

const SuggestionTools = () => {
  return (
    <GridItem
      bg={"#13151C"}
      w={"100%"}
      h={"100%"}
      zIndex={11}
      borderRadius={25}
      pt={4}
    >
      <Heading as={"h3"} size={"md"} dir="rtl" px={6} color={"#FFFFFF"}>
        ابزار پیشنهادی
      </Heading>
      <Flex
        flexDir={"row-reverse"}
        justifyContent={"space-between"}
        my={7}
        minH={"100px"}
        px={6}

        // overflowX={"scroll"}
        // className="xx"
      >
        {Data.map((item) => (
          <Stack
            _hover={{ cursor: "pointer", bg: "#fff", p: 2, color: "#000" }}
            dir="rtl"
            p={2}
            borderRadius={12}
            transition="background 0.3s ease"
            maxW={"17%"}
            maxH={"10%"}
          >
            <Box>
              <Image
                src={item.img}
                boxSize="70px"
                objectFit="contain"
                fit={"cover"}
              />
            </Box>
            <Text fontSize={"lg"} color={"#FFFFFF"}>
              {item.name}
            </Text>
            <Text fontSize={"xs"} color={"#979587 "}>
              {item.usage}
            </Text>
          </Stack>
        ))}
      </Flex>
      <Flex
        flexDir={"row-reverse"}
        bg={"#232730"}
        h={"70px"}
        p={4}
        overflow={"hidden"}
        borderBottomRadius={12}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Flex alignItems={"center"} fontSize={20}>
          <Text color={"#FFFFFF"}>ترندهای روز </Text>
          <IoMdTrendingUp />
        </Flex>
        <Box
          color={"#A8ABBD"}
          border={"0.25px solid #414451"}
          borderRadius={25}
          p={1}
          px={4}
        >
          تخفیف دیجی کالا
        </Box>
        <Box
          color={"#A8ABBD"}
          border={"0.25px solid #414451"}
          borderRadius={25}
          p={1}
          px={4}
        >
          خبرهای مهم
        </Box>
        <Box
          color={"#A8ABBD"}
          border={"0.25px solid #414451"}
          borderRadius={25}
          p={1}
          px={4}
        >
          قیمت بلیط هواپیما
        </Box>
        <Box
          color={"#A8ABBD"}
          border={"0.25px solid #414451"}
          borderRadius={25}
          p={1}
          px={4}
        >
          قیمت دلار{" "}
        </Box>
      </Flex>
    </GridItem>
  );
};

export default SuggestionTools;

const Data = [
  {
    img: "https://liara-s3.dastyar.io/ea8583e2-7dc1-429e-ab4f-c88a533286be.png",
    name: "دیجیکالا",
    usage: "خرید با جایزه",
  },
  {
    img: "https://liara-s3.dastyar.io/ea7883cd-0504-4222-8687-3807dcd339f0.png",
    name: "جیمیل",
    usage: "ورورد به جیمیل",
  },
  {
    img: "https://liara-s3.dastyar.io/39802fc0-8d30-46ca-9e50-59910a0a77a2.png",
    name: "ترجمه گوگل",
    usage: "ترجمه آسان",
  },
  {
    img: "https://liara-s3.dastyar.io/6c83dc5a-7015-4258-b7e9-80acb1f4cb79.gif",
    name: "از کی سرمایه",
    usage: "با حداقل ۳۰٪ سود روزشمار",
  },
  {
    img: "https://liara-s3.dastyar.io/eda73894-c671-47c2-a431-58a5ba7ac195.jpg",
    name: "میلی",
    usage: "پس انداز آنلاین طلا ",
  },
  // {
  //   img: "https://liara-s3.dastyar.io/3a9ee7e1-d725-4a78-a897-7176f476762e.png",
  //   name: "دیوار",
  //   usage: "خرید و فروش آنلاین",
  // },
  // {
  //   img: "https://liara-s3.dastyar.io/ec2341b1-3768-40fd-9239-72987084702b.png",
  //   name: "یوتیوب",
  //   usage: "ویدیوهای یوتیوب",
  // },
];
