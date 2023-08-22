import React from "react";
import { Box, Text, Link, Flex, useColorModeValue, Icon } from "@chakra-ui/react";
import { RiFacebookBoxFill, RiTwitterFill, RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const footerBgColor = useColorModeValue("gray.100", "gray.700");
  const iconColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box bg={footerBgColor} py={4}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        maxW="container.lg"
        mx="auto"
        px={4}
      >
        <Text fontSize="sm" color="gray.500">
          &copy; 2023 Ritesh Kr. Shukla. All rights reserved.
        </Text>
        <Flex alignItems="center">
          <Link mx={2} fontSize="sm" color="gray.500">
            Privacy Policy
          </Link>
          <Link mx={2} fontSize="sm" color="gray.500">
            Terms of Service
          </Link>
          <Box mx={2}>
            <Icon as={RiFacebookBoxFill} boxSize={5} color={iconColor} />
          </Box>
          <Box mx={2}>
            <Icon as={RiTwitterFill} boxSize={5} color={iconColor} />
          </Box>
          <Box mx={2}>
            <Icon as={RiInstagramFill} boxSize={5} color={iconColor} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
