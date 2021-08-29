import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

const Topbar: React.FC<Props> = () => {
  return (
    <Box bg="#000" py="1">
      <Text
        textTransform="capitalize"
        fontSize="sm"
        letterSpacing="0.15rem"
        textAlign="center"
        fontFamily="hk_grotesk"
        color="white"
      >
        Latest Sport Updates
      </Text>
    </Box>
  );
};

export default Topbar;
