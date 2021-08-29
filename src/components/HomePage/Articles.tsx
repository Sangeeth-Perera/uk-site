import { Box, Button, Center, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import router from "next/router";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";

interface Props { }

const Articles: React.FC<Props> = () => {
  const property = {
    imageUrl: "./Assets/article1.jpg",
    imageAlt: "cover"
  }
  const handleDragStart = (e) => e.preventDefault();
  const [blogList, setBlogList] = useState([]);


  

  const handleView = (item:any)=>{
    router.push(`/blog-details/${item.id}`);
    // router.push({
    //   pathname: '/blog-details/[bid]',
    //   query: { bid: item.id },
    // })
    // dispatch(addItem(item));
    // dispatch(calculateTotal(item.details.price));

  }


  const itemsArray = [
    <Box display="flex" gridColumnGap="20px">
      <Image height="100%" width="100%" display="flex" src="./Assets/cover1.png" />
    </Box>,
    <Box display="flex" gridColumnGap="20px">
      <Image height="100%" width="100%" display="flex" src="./Assets/cover2.png" />
    </Box>,
    <Box display="flex" gridColumnGap="20px">
      <Image height="100%" width="100%" display="flex" src="./Assets/2.png" />
    </Box>

  ];
  return (
    <Box>
      <AliceCarousel mouseTracking items={itemsArray} disableButtonsControls animationType="slide" controlsStrategy="responsive" />
    </Box>
  );
};

export default Articles;
