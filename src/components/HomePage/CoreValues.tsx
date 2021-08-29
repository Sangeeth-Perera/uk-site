import { Box, Center, Container, IconButton, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React ,{useState} from "react";
import { FiThumbsUp, FiHome, FiAperture } from "react-icons/fi";

interface Props {}

const CoreValues: React.FC<Props> = () => {

  const [itemIndex, setItemIndex] = useState(0);

  const values = [{title:"Our Vision", info: "Our vision of Building Bridges of Hope is about linking people and organizations to provide long term and ongoing benefit to our beneficiaries."}, {title:"Our Purpose", info: "Our purpose is to Make People Feel Better by bringing hope and satisfaction to both our beneficiaries and supporters."}];
  return (
 <Box>
   
  <Container alignContent="center" width="100%" py="1" paddingY="50px">
    <Stack direction={["column", "row"]} spacing="200px">
      <Box w="100px" h="60px"  borderRadius="full" _hover = {{bg:"#ccccb3"}} onClick={()=>setItemIndex(0)}><FiThumbsUp size = "100%"/><Text><Center>Our Vision</Center></Text></Box>
      <Box w="100px" h="60px" borderRadius="full" _hover = {{bg:"#ccccb3"}} onClick={()=>setItemIndex(1)}><FiHome size = "100%"/><Text><Center>Our Purpose</Center></Text></Box>
    </Stack>
    </Container>
    <Container alignItems="center" paddingBottom="30px">
      <Box width="100%" height="100px" textAlign="center" alignSelf="center" bg="#e0e0eb" borderRadius = "lg">
        <Text alignSelf="center"><b>{values[itemIndex].title}</b></Text>
        <Text>{values[itemIndex].info}</Text>
      </Box>
    </Container>
    
  </Box>
  );
};

export default CoreValues;
