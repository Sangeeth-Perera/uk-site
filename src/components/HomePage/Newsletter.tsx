import { Box, Button, Center, Input, Spacer, } from "@chakra-ui/react";
import React from "react";

interface Props {}

const Newsletter: React.FC<Props> = () => {
  return (
    <Box paddingBottom="40px">
      <Center fontSize="25px"><b>JOIN THE CLUB</b></Center>
      <Center paddingBottom="20px">Sign up for latest news, special offers & more!</Center>
      <Center paddingX="20px">
        <Input placeholder="Enter your email"  width ="60%" height="40px" paddingRight="20px"/>
        <Button height="40px" colorScheme="black" variant="outline" >Signup</Button>
      </Center>
    </Box>
  );
};

export default Newsletter;
