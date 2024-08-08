import { IoCloudDoneSharp } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { RiSettings3Fill } from "react-icons/ri";
import { Tooltip } from "@chakra-ui/react";
import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        my={4}
        mx={2}
      >
        <Flex gap={2} fontSize={28} color={"gray.400"}>
          <Box
            padding={1}
            borderRadius={"80%"}
            overflow={"hidden"}
            _hover={{ bg: "hsla(0,0%,50%,.7)", cursor: "pointer" }}
          >
            <RiSettings3Fill />
          </Box>
          <Box
            padding={1}
            borderRadius={"80%"}
            overflow={"hidden"}
            _hover={{ bg: "hsla(0,0%,50%,.7)", cursor: "pointer" }}
          >
            <BsFillPersonFill />
          </Box>
          <Tooltip
            label="همگام سازی موفق"
            fontSize={"8px"}
            bg={"rgba(0,0,0,0.4)"}
            borderRadius={"10px"}
            padding={2}
            color="#fff"
          >
            <Flex
              padding={1}
              position={"relative"}
              zIndex={2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* <Box
                width={4}
                height={4}
                borderRadius={"50%"}
                position={"absolute"}
                bg={"black"}
                m={"auto"}
              ></Box> */}
              <IoCloudDoneSharp />
            </Flex>
          </Tooltip>
        </Flex>
        <Flex gap={2} alignItems={"center"}>
          <Text
            color={"#559EFF"}
            fontSize={20}
            fontWeight={"bold"}
            cursor={"pointer"}
          >
            دستیار
          </Text>
          <Box
            bg={"blue.500"}
            borderRadius={8}
            width={7}
            height={7}
            mx={"auto"}
            textAlign={"center"}
          >
            <svg
              width="27"
              height="27"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="bg-blue-3f rounded-xl md:rounded shrink-0"
              size="32"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.18663 16.5307C8.27257 14.044 7.27188 13.1998 6.18455 13.998C4.25083 15.4175 6.08701 24.9233 15.0443 24.9233C26.3628 24.9233 25.9212 11.1497 22.803 11.1497C21.7011 11.1497 20.9844 12.6813 20.6528 15.7444C21.3253 11.0409 20.8972 8.68921 19.3686 8.68921C18.0337 8.68921 17.2721 11.0409 17.0839 15.7444C17.32 9.61759 16.6402 6.5542 15.0443 6.5542C13.4485 6.5542 12.83 9.61759 13.1887 15.7444C12.8321 10.6013 12.0384 8.0297 10.8076 8.0297C9.09401 8.0297 8.55368 10.8634 9.18663 16.5307Z"
                stroke="white"
                strokeWidth="1.35021"
                strokeLinejoin="round"
              ></path>
            </svg>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
