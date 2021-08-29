import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";
import AliceCarousel from "react-alice-carousel";

interface Props {}

const BestSellers: React.FC<Props> = () => {
  const property = {
    image1Url1: "https://cdn.shopify.com/s/files/1/0052/5870/7062/files/desktop_Prouct_philosophie.jpg?v=1597764477",
    imageAlt: "cover",
    image1Url2:"https://cdn.shopify.com/s/files/1/0052/5870/7062/files/b_s_Website_Slider_Winter_Desktop.jpg?"
  }
  const handleDragStart = (e) => e.preventDefault();
  
const items = [
  <Box display="flex" gridColumnGap="20px">
    <Box>
    <Center fontFamily="Butler_Regular" paddingBottom="40px" fontSize="40px"><b>New Releases</b></Center>
      <img src={property.image1Url1} onDragStart={handleDragStart} className="yours-custom-class" />
    </Box>
  </Box>,
  <Box>
  <Box>
   <Center fontFamily="Butler_Regular" paddingBottom="40px" fontSize="40px"><b>Brief Case</b></Center>
    <img src={property.image1Url2} onDragStart={handleDragStart} className="yours-custom-class" />
  </Box>
</Box>
  
];
  return (
    <Box paddingTop= "40px">
      <AliceCarousel mouseTracking items={items} autoPlay disableButtonsControls />
    </Box>
  );
};

export default BestSellers;
