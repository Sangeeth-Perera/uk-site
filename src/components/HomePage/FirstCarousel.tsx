import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import { Image } from "@chakra-ui/react"

interface Props {}

const FirstCarousel: React.FC<Props> = () => {
  const property = {
    imageUrl: "https://cdn.shopify.com/s/files/1/0052/5870/7062/products/SKU_8650817_03_a5700d6a-7c72-4896-91dc-bdcbd607cb2b_400x.jpg",
    imageAlt: "cover"
  }
  const handleDragStart = (e) => e.preventDefault();
  
const items = [
  <Box  display="flex" gridColumnGap="20px">
    <Image height = "600px" width="100%" display= "flex" src="./Assets/game4.jpg" />
  </Box>,
  <Box  display="flex" gridColumnGap="20px">
    <Image height = "600px" width="100%" display= "flex" src="./Assets/game3.jpg" />
  </Box>,
   <Box  display="flex" gridColumnGap="20px">
   <Image height = "600px" width="100%" display= "flex" src="./Assets/game1.jpeg" />
 </Box>
  
];
  return (
    <Box>
      <Center backgroundColor="#0f0f0f" color="#FFF" paddingY= "40px" casing = "uppercase" fontSize="34px">------- Recent Blogs -------</Center>
      <AliceCarousel mouseTracking items={items} disableButtonsControls animationType = "slide" controlsStrategy = "responsive"/>
    </Box>
  );
};

export default FirstCarousel;
