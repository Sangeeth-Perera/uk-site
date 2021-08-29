
import { Box, Text, Image, Container, Link } from "@chakra-ui/react";
import React from "react";

interface Props { }

const Banner: React.FC<Props> = () => {
  const property = {
    imageUrl: "https://cdn.shopify.com/s/files/1/0052/5870/7062/files/Top-Slider_Winter-Mood_Fuad.jpg?v=1608549056",
    imageAlt: "cover"
  }
  return (
    <Box
      alignContent="center"
      backgroundSize="cover"
      bgImage="url(Assets/sanga-pic.jpg)"
      height="700px"
      borderColor="#111112"
    >
      <Box height="100%" verticalAlign="center" paddingTop="100px" paddingLeft="50px">
          {/* <Text color="#FFF" fontWeight="30px" casing="uppercase" fontSize="44px" textAlign="left" fontFamily="Butler_Regular">
            <b><i>Sports<br />
            Latest Updates...</i></b></Text>
          <Text color="#FFF" as="u" paddingTop="20px" fontFamily="Butler_Regular" fontSize="25px"><Link href="#" _hover={{ bg: "#001a33", color: "white" }}>Check Now</Link></Text> */}
      </Box>
    </Box>
  );
};

export default Banner;
