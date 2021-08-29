
import React from "react";
import { Box, Heading, Flex, Text, Button, Center, Spacer } from "@chakra-ui/react";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);
interface Props { }
const Navbar: React.FC<Props> = (Props) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.5rem"
      bg="white"
      color="black"
      {...Props}
    >
      <Flex align="center" mr={5} justify="true">
        <Flex justify="true">
          <Box p="1" alignSelf="center" paddingLeft="50%">
            <Heading size="md" ><img src="./Assets/uk-logo.png" /></Heading>
          </Box>
          <Spacer />
        </Flex>
      </Flex>



    </Flex>
  );
};

export default Navbar;
